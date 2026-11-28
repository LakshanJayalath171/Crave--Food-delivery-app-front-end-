import { Filter, Star, X } from "lucide-react"
import Navbar from "../components/Navbar"
import { useEffect, useState } from "react";
import DishCard from "../components/DishCard";
import axiosInstance from "../api/axiosInstance";
import { Minus , Plus } from "lucide-react";
import { useCartStore } from "../store/cartStore";
import { useAuthStore } from "../store/authStore";
import { toast } from "react-toastify";

interface ExploreProduct {
  _id: string;
  name: string;
  image_url: string;
  description: string;
  price: number;
  category?: string;
  availability?: boolean;
}

const Explore = () => {

  const { items, increaseQuantity, decreaseQuantity, addToCart } = useCartStore();
  const { isAuthenticated, user } = useAuthStore();

  const addOrPlus = (product: ExploreProduct) => {
    if(!isAuthenticated || !user) {
      toast.error("Please login to add items to the cart");
      return;
    }

    const status = selectedProduct?.availability;
    if (status === false) {
      toast.error("This product is currently unavailable.");
      return;
    }

    const existingItem = items.find((item) => item.product_id === product._id);
    if (existingItem) {
      // Product already exists: increase its quantity
      increaseQuantity(product._id);
    }
    else{
      const newItem = {
        product_id: product._id,
        product_name: product.name,
        product_image: product.image_url,
        product_price: parseFloat(product.price.toString().replace("Rs. ", "")),
        product_quantity: 1,
      };

      addToCart(newItem);
    }
  };

  const [products, setProducts] = useState<ExploreProduct[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<ExploreProduct | null>(null);

  const [priceRange, setPriceRange] = useState(0);

  useEffect(() => {
    let isMounted = true;

    axiosInstance
      .get("/admin/all-products")
      .then((response) => {
        if (isMounted && response.data.success) {
          setProducts(response.data.products);
        }
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    if (!selectedProduct) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedProduct(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedProduct]);

  
  return (
    <div className="w-screen h-screen">
      {/* navbar */}
      <Navbar/>

      {/* card layout for the display specific selected product */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
          onClick={() => setSelectedProduct(null)}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="product-details-title"
            className="relative grid max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-white shadow-2xl md:grid-cols-2"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedProduct(null)}
              aria-label="Close product details"
              className="absolute right-3 top-3 z-10 rounded-full bg-white/90 p-2 text-main shadow transition hover:bg-white"
            >
              <X size={20} />
            </button>
           <div className="flex items-center justify-center bg-gray-100 px-10">
             <img
              src={selectedProduct.image_url}
              alt={selectedProduct.name}
              className="h-24 w-48 object-contain md:h-full md:min-h-96"
            />
           </div>
            <div className="flex flex-col p-6 md:p-8">
              {selectedProduct.category && (
                <span className="badge-special w-fit">{selectedProduct.category}</span>
              )}
              <h2
                id="product-details-title"
                className="mt-3 text-2xl font-bold text-main"
              >
                {selectedProduct.name}
              </h2>
              <p className="mt-1 whitespace-pre-wrap text-sm leading-6 text-secondary">
                {selectedProduct.description || "No description available."}
              </p>

              <div className="my-3 mx-2">
                <div className="flex items-center justify-start gap-2">
                  <Star size={15} className="text-amber-500" />
                  <p className="text-main font-bold text-sm">4.8</p>
                </div>
              </div>
              {selectedProduct.availability !== undefined && (
                <p className={`mt-4 text-sm font-semibold ${selectedProduct.availability ? "text-success" : "text-error"}`}>
                  {selectedProduct.availability ? "Available now" : "Currently unavailable"}
                </p>
              )}
              <div className="mt-auto flex items-center justify-between gap-4 pt-8">
                <p className="text-xl font-bold text-primary">
                  Rs. {selectedProduct.price.toLocaleString("en-LK")}
                </p>
                <div className="flex items-center justify-center gap-2">
                  <div className="text-xl font-bold bg-primary rounded-full cursor-pointer">
                    <button  className="m-2 cursor-pointer">
                      <Minus onClick={()=>decreaseQuantity(selectedProduct._id)} size={15} className="text-white"/>
                    </button>
                  </div>
                  <div className="text-xl font-bold bg-green-500 rounded-full cursor-pointer">
                    <button onClick={()=>addOrPlus(selectedProduct)} className="m-2 cursor-pointer">
                      <Plus size={15} className="text-white"/>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* heading section */}
      <div className="flex items-center justify-center py-10">
        <div className="text-center">
          <div>
            <p className="font-bold text-primary">🔥Discover Your Next Favorite Dish</p>
          </div>

          <div>
            <h1 className="font-bold text-4xl">Explore Delicious Food</h1>
            <p className="font-light text-xs text-secondary">From comforting classics to exciting new flavors,<br/> find the perfect meal crafted by local culinary artisans.</p>
          </div>
        </div>
      </div>

      {/* content */}
      <div className="flex items-center justify-center ">
        {/* sidebar */}
        <div className="w-1/4 px-6">
          {/* sidebar header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-center gap-2">
              <Filter className="text-deep-orange" size={20}/>
              <p className="text-lg font-bold text-main">Filters</p>
            </div>
            <p className="text-sm font-light text-primary hover:underline cursor-pointer">clear-all</p>
          </div>

          {/* sidebar filters */}

          {/* price slider */}
          <div className="mt-3">
            <div className="flex items-center justify-between">
              <p className="text-sm font-light text-main">Price Range</p>
              <p className="text-sm font-light text-primary ">Rs. 0.00 — Rs. {priceRange}</p>
            </div>

            <div className="mt-2 ">
              <input type="range" min={0} max="10000" value={priceRange} onChange={(e) => setPriceRange(parseInt(e.target.value))} className="range cursor-pointer range-warning h-8 w-full" />
            </div>

            <div className="flex items-center justify-between">
              <p className="text-sm font-light text-secondary">Rs.0</p>
              <p className="text-sm font-light text-secondary">Rs. 10,000</p>
            </div>
          </div>

          {/* rating filter */}
          <div className="mt-3">
            <h1 className="text-sm font-light text-main">Customer Rating</h1>
            <div className="flex items-center justify-start gap-2 mt-2">
              <div>
                <input type="checkbox" className="accent-amber-600"/>
              </div>
              <div className="flex items-center justify-center gap-1">
                <Star size={15} className="text-amber-500"/>
                <p className="text-main font-bold text-sm">4.5 & up</p>
                <p className="text-secondary font-light text-xs">(32)</p>
              </div>
            </div>

            <div className="flex items-center justify-start gap-2 mt-2">
              <div>
                <input type="checkbox" className="accent-amber-600"/>
              </div>
              <div className="flex items-center justify-center gap-1">
                <Star size={15} className="text-amber-500"/>
                <p className="text-main font-bold text-sm">4.0 & up</p>
                <p className="text-secondary font-light text-xs">(12)</p>
              </div>
            </div>

            <div className="flex items-center justify-start gap-2 mt-2">
              <div>
                <input type="checkbox" className="accent-amber-600"/>
              </div>
              <div className="flex items-center justify-center gap-1">
                <Star size={15} className="text-amber-500"/>
                <p className="text-main font-bold text-sm">3.5 & up</p>
                <p className="text-secondary font-light text-xs">(5)</p>
              </div>
            </div>
          </div>

          {/* special offers */}
          <div className="mt-3">
            <h1 className="text-sm font-light text-main">Customer Rating</h1>
            <div className="flex items-center justify-start gap-2 mt-2">
              <div>
                <input type="checkbox" className="accent-amber-600"/>
              </div>
              <div className="flex items-center justify-center gap-1">
                <Star size={15} className="text-amber-500"/>
                <p className="text-main font-bold text-sm">Discounted Items</p>
                
              </div>
            </div>

            <div className="flex items-center justify-start gap-2 mt-2">
              <div>
                <input type="checkbox" className="accent-amber-600"/>
              </div>
              <div className="flex items-center justify-center gap-1">
                <Star size={15} className="text-amber-500"/>
                <p className="text-main font-bold text-sm">Buy One Get One</p>
                
              </div>
            </div>

            <div className="flex items-center justify-start gap-2 mt-2">
              <div>
                <input type="checkbox" className="accent-amber-600"/>
              </div>
              <div className="flex items-center justify-center gap-1">
                <Star size={15} className="text-amber-500"/>
                <p className="text-main font-bold text-sm">Free Delivery</p>
                
              </div>
            </div>
          </div>

          {/* Availability */}

          <div className="mt-3">
            <h1 className="text-sm font-light text-main">Availability</h1>
            <div className="flex items-center justify-start gap-2 mt-2">
              <div>
                <input type="radio" name="availability" className="accent-amber-600"/>
              </div>
              <div className="flex items-center justify-center gap-1">
                <Star size={15} className="text-amber-500"/>
                <p className="text-main font-bold text-sm">Available Now</p>
                
              </div>
            </div>

            <div className="flex items-center justify-start gap-2 mt-2">
              <div>
                <input type="radio" name="availability" className="accent-amber-600"/>
              </div>
              <div className="flex items-center justify-center gap-1">
                <Star size={15} className="text-amber-500"/>
                <p className="text-main font-bold text-sm">Open Restaurants Only</p>
                
              </div>
            </div>
          </div>

          {/* apply */}
          <div className="flex items-center justify-start mt-4 w-full h-full">
            <button className="btn-primary">Apply Filters</button>
          </div>
        </div>

        {/* products */}
        <div className="w-3/4 flex items-start justify-start overflow-y-auto h-[70vh] gap-4 px-6 py-2">
          <div className="grid grid-cols-3 gap-4">
            {products?.map((items) => (
              <DishCard
                key={items._id}
                id={items._id}
                name={items.name}
                image={items.image_url}
                description={items.description}
                price={`Rs. ${items.price}`}
                onSelect={() => setSelectedProduct(items)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Explore
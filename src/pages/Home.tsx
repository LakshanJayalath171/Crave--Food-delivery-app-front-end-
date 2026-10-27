import Navbar from "../components/Navbar";
import { assets, menu_list, food_list } from "../assets/frontend_assets/assets";
import {
  ArrowRight,
  Flame,
  FaceSlightlySmiling,
  UserRoundArrowLeft,
  FaceGrinning,
  Star,
  ChevronRight,
  ChevronLeft,
  Pizza,
} from "lucide-react";
import DishCard from "../components/DishCard";
import Footer from "../components/Footer";
import { useEffect, useRef, useState } from "react";
import axiosInstance from "../api/axiosInstance";

type HomeCategory = {
  _id?: string;
  name: string;
  image_url?: string;
  availability?: boolean;
};

const Home = () => {
  const [category, setCategory] = useState<HomeCategory[]>([]);
  const categorySliderRef = useRef<HTMLDivElement>(null);
  const [canScrollPrevious, setCanScrollPrevious] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const updateSliderControls = () => {
    const slider = categorySliderRef.current;

    if (!slider) {
      return;
    }

    setCanScrollPrevious(slider.scrollLeft > 0);
    setCanScrollNext(
      Math.ceil(slider.scrollLeft + slider.clientWidth) < slider.scrollWidth,
    );
  };

  const scrollCategories = (direction: "previous" | "next") => {
    const slider = categorySliderRef.current;

    if (!slider) {
      return;
    }

    slider.scrollBy({
      left: direction === "next" ? slider.clientWidth * 0.82 : -slider.clientWidth * 0.82,
      behavior: "smooth",
    });
  };

  const allCategories = async()=>{
    try{
      const response = await axiosInstance.get("/user/categories");

      setCategory(response.data.data)
    }
    catch(err){
      console.log(err)
    }
  }

  useEffect(()=>{
    const timeoutId = window.setTimeout(() => {
      void allCategories();
    }, 0);

    return () => window.clearTimeout(timeoutId);
  },[])

  useEffect(() => {
    const frameId = window.requestAnimationFrame(updateSliderControls);
    window.addEventListener("resize", updateSliderControls);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("resize", updateSliderControls);
    };
  }, [category]);

  const displayedCategories: HomeCategory[] = category.length
    ? category
    : menu_list.map((item) => ({
        name: item.menu_name,
        image_url: item.menu_image,
      }));

  
  return (
    <div>
      {/* navbar */}
      <Navbar />
      {/* main content */}

      <div className="px-10">
        {/* hero section */}
        <div className="my-6 relative rounded-2xl overflow-hidden">
          <img src={assets.header_img} />

          <div className="absolute top-0 left-0 bg-gradient-to-r from-black to-transparent px-4 py-2 h-full py-10">
            {/* top white area */}
            <div className="flex items-center justify-start gap-2 ">
              <div className="flex items-center justify-center bg-surface py-1 px-3 rounded-full">
                <Flame size={20} className="text-deep-orange" />
                <p className="text-xs font-medium">
                  Fresh food, delivered fast
                </p>
              </div>
            </div>

            {/* hero heading */}
            <div>
              <h1 className="text-6xl font-bold text-on-dark mt-4">
                Your favorite food,
                <br /> delivered to your
                <br /> door.
              </h1>
            </div>

            {/* hero description */}
            <div>
              <p className="text-on-dark mt-4 text-muted">
                Discover the best restaurants around you and enjoy delicious
                meals <br />
                delivered fresh, fast, and right to your doorstep.
              </p>
            </div>

            {/* button */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              <button className="btn-primary flex items-center">
                Explore Foods
                <ArrowRight />
              </button>
              <button className="btn-secondary">Order Now</button>
            </div>

            {/* down section */}
            <div className="flex items-center justify-start mt-2">
              <div className="apple rounded-lg px-2 py-3 flex items-center justify-between">
                <div className="flex items-center justify-center px-3">
                  <div className="p-2 rounded-full bg-surface -ml-2">
                    <FaceSlightlySmiling className="text-red-500" size={12} />
                  </div>
                  <div className="p-2 rounded-full bg-surface -ml-2 ">
                    <UserRoundArrowLeft className="text-orange-500" size={12} />
                  </div>
                  <div className="p-2 rounded-full bg-surface -ml-2">
                    <FaceGrinning className="text-yellow-500" size={12} />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-start gap-1">
                    <div className="flex items-center justify-start ">
                      {[0, 1, 2, 3, 4].map((index) => (
                        <Star
                          className="text-yellow-500"
                          key={index}
                          size={14}
                        />
                      ))}
                    </div>
                    <p className="text-sm font-bold text-white">4.8</p>
                  </div>

                  <div>
                    <p className="text-xs font-light text-white">
                      Loved by food lovers (12,000+ orders)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* category section */}
        <div>
          {/* category section's navigator */}
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-2xl font-extrabold text-primary ">
                Explore by Category
              </h1>
              <p className="text-main text-sm font-medium">
                Whatever you're craving, we've got something for you.
              </p>
            </div>

            <div className="flex items-center justify-center gap-2">
              <button
                type="button"
                aria-label="Previous categories"
                disabled={!canScrollPrevious}
                onClick={() => scrollCategories("previous")}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-orange-100 bg-white text-primary shadow-sm transition hover:border-primary hover:bg-soft-orange disabled:cursor-not-allowed disabled:opacity-35 cursor-pointer"
              >
                <ChevronLeft />
              </button>
              <button
                type="button"
                aria-label="Next categories"
                disabled={!canScrollNext}
                onClick={() => scrollCategories("next")}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-orange-100 bg-white text-primary shadow-sm transition hover:border-primary hover:bg-soft-orange disabled:cursor-not-allowed disabled:opacity-35 cursor-pointer"
              >
                <ChevronRight />
              </button>
            </div>
          </div>

          {/* category items */}
          <div
            ref={categorySliderRef}
            onScroll={updateSliderControls}
            className="category-slider flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4"
            aria-label="Food categories"
          >
            {displayedCategories.map((item) => {
              const itemName = item.name;
              const itemCount = food_list.filter(
                (dish) => dish.category === itemName,
              ).length;

              return (
                <a
                  href={`#${itemName.toLowerCase().replace(/\s+/g, "-")}`}
                  key={item._id ?? itemName}
                  className="category-slide group relative h-48 shrink-0 snap-start overflow-hidden rounded-2xl bg-dark shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <img
                    src={item.image_url}
                    alt={itemName}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                    <div className="flex items-end justify-between gap-3">
                      <div>
                        <p className="text-lg font-bold">{itemName}</p>
                        <p className="mt-1 text-xs text-white/75">
                          {itemCount} {itemCount === 1 ? "dish" : "dishes"}
                        </p>
                      </div>
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition group-hover:bg-primary">
                        <ArrowRight size={16} />
                      </span>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>

          {/* popular items */}

          <div className="mt-10">
            {/* heading */}
            <div>
              <h1 className="text-2xl font-extrabold text-primary">
                Popular Dishes
              </h1>
              <p className="text-md font-medium">
                Customer favorites, made fresh and delivered fast.
              </p>
            </div>

            <div className="mt-4 grid grid-cols-4 gap-3">
              {food_list.slice(0, 4).map((items) => (
                <DishCard
                  key={items._id}
                  name={items.name}
                  image={items.image}
                  description={items.description}
                  price={String(items.price)}
                />
              ))}
            </div>
          </div>

          {/* footer section */}

          <div className="flex items-center justify-between p-10 bg-page">
            <div>
              <p className="text-deep-orange font-bold">SPECIAL OFFER</p>
              <h1 className="text-main text-2xl font-semibold mt-2">
                Your first meal comes with a treat.
              </h1>
              <p className="text-secondary text-xs font-light">
                Enjoy a special discount on your first order and discover your
                next favorite meal from the city’s finest kitchens.
              </p>

              <button className="btn-primary flex items-center justify-center gap-2 mt-2 cursor-pointer">
                Claim Your Offer
                <Pizza />
              </button>
            </div>
            <div>
              <img src="/logo.svg" alt="" className="w-96 h-72" />
            </div>
          </div>
        </div>
      </div>

      {/* footer */}
      <Footer/>
    </div>
  );
};

export default Home;

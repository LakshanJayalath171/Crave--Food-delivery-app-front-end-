import Navbar from "../components/Navbar"
import { assets ,menu_list} from "../assets/frontend_assets/assets"
import { ArrowRight, Flame ,FaceSlightlySmiling ,  UserRoundArrowLeft , FaceGrinning, Star, ChevronRight, ChevronLeft} from "lucide-react"

const Home = () => {
  return (
    <div>
      {/* navbar */}
      <Navbar/>

      {/* hero section */}
      <div className="my-6 relative rounded-2xl overflow-hidden">
        <img src={assets.header_img}/>

        <div className="absolute top-0 left-0 bg-gradient-to-r from-black to-transparent px-4 py-2 h-full py-10">

          {/* top white area */}
          <div className="flex items-center justify-start gap-2 ">

            <div className="flex items-center justify-center bg-surface py-1 px-3 rounded-full">
              <Flame size={20} className="text-deep-orange"/>
              <p className="text-xs font-medium">Fresh food, delivered fast</p>
            </div>
            
          </div>

          {/* hero heading */}
          <div>
            <h1 className="text-6xl font-bold text-on-dark mt-4">
              Your favorite food,<br/> delivered to your<br/> door.
            </h1>
          </div>

          {/* hero description */}
          <div>
            <p className="text-on-dark mt-4 text-muted">
              Discover the best restaurants around you and enjoy delicious meals <br/>delivered fresh, fast, and right to your doorstep.
            </p>
          </div>

          {/* button */}
          <div className="grid grid-cols-2 gap-4 mt-6">
            <button className="btn-primary flex items-center">Explore Foods<ArrowRight/></button>
            <button className="btn-secondary">Order Now</button>
          </div>

          {/* down section */}
          <div className="flex items-center justify-start mt-2">
            <div className="apple rounded-lg px-2 py-3 flex items-center justify-between">

              <div className="flex items-center justify-center px-3">
                <div className="p-2 rounded-full bg-surface -ml-2"><FaceSlightlySmiling className="text-red-500" size={12}/></div>
                <div className="p-2 rounded-full bg-surface -ml-2 "><UserRoundArrowLeft className="text-orange-500" size={12}/></div>
                <div className="p-2 rounded-full bg-surface -ml-2"><FaceGrinning className="text-yellow-500" size={12}/></div>
              </div>

              <div>
                <div className="flex items-center justify-start gap-1">
                  <div className="flex items-center justify-start ">
                    {[0, 1, 2, 3, 4].map((index) => (
                      <Star className="text-yellow-500" key={index} size={14}/>
                    ))}
                  </div>
                  <p className="text-sm font-bold text-white">4.8</p>
                </div>

                <div>
                  <p className="text-xs font-light text-white">Loved by food lovers (12,000+ orders)</p>
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
            <h1 className="text-2xl font-extrabold text-primary ">Explore by Category</h1>
            <p className="text-main text-sm font-medium">Whatever you're craving, we've got something for you.</p>
         </div>

         <div className="flex items-center justify-center gap-2">
          <button className="text-primary hover:text-primary-dark cursor-pointer"><ChevronLeft/></button>
          <button className="text-primary hover:text-primary-dark cursor-pointer"><ChevronRight/></button>
         </div>
        </div>

        {/* category items */}

        <div className="flex items-center justify-start gap-10 overflow-x-auto scrollbar-hide">

          {menu_list.map((item, index) => (<a href="#" className="category-item">
            <div key={index}>
              <img src={item.menu_image}  className="w-24 h-24 object-cover rounded-full"/>
              <div className="flex items-center justify-center mt-2">
                <p className="text-sm font-bold text-main">{item.menu_name}</p>
              </div>
            </div>
          </a>))}
          
        </div>
      </div>
    </div>
  )
}

export default Home
import { MessagesSquare, Globe, Share2 , CreditCard, WalletMinimal, Cast} from "lucide-react";

const Footer = () => {
  return (
    <div className="px-10 pt-10 pb-4 bg-dark w-screen h-full">
      <div className="flex items-center justify-between py-10">
        <div>
            <div className="flex items-center justify-start gap-2">
                <img src="/favicon.svg" className="w-8 h-8"/>
                <h1 className=" font-bold text-2xl">Cra<span className="text-primary">ve</span></h1>
            </div>
            <div className="mt-2">
                <p className="text-light text-secondary text-xs">Craving flavor delivered right to your doorstep. Experience culinary <br/> excellence crafted by passionate top-tier local restaurants across the city.</p>
            </div>

            <div className="flex items-center justify-start gap-3 mt-3">
                <div className="apple rounded-full p-2 cursor-pointer"><Globe className="text-on-dark" size={15}/></div>
                <div className="apple rounded-full p-2 cursor-pointer"><Share2 className="text-on-dark" size={15}/></div>
                <div className="apple rounded-full p-2 cursor-pointer"><MessagesSquare className="text-on-dark" size={15}/></div>
            </div>
        </div>
        <div>
            <h1 className="text-on-dark font-bold text-lg">Explore</h1>
            <p className="text-secondary font-light text-sm">Curated Flavors</p>
            <p className="text-secondary font-light text-sm">Trending Eateries</p>
            <p className="text-secondary font-light text-sm">Dietary Selections</p>
            <p className="text-secondary font-light text-sm">Fast Delivery</p>
        </div>
        

        <div>
            <h1 className="text-on-dark font-bold text-lg">Company</h1>
            <p className="text-secondary font-light text-sm">About Us</p>
            <p className="text-secondary font-light text-sm">Careers</p>
            <p className="text-secondary font-light text-sm">Partner with Crave</p>
            <p className="text-secondary font-light text-sm">Press & Media</p>
        </div>

        <div>
            <h1 className="text-on-dark font-bold text-lg">Support</h1>
            <p className="text-secondary font-light text-sm">Help Center</p>
            <p className="text-secondary font-light text-sm">Order Tracking</p>
            <p className="text-secondary font-light text-sm">Privacy Policy</p>
            <p className="text-secondary font-light text-sm">Terms of Service</p>
        </div>
      </div>

      <hr className="text-secondary my-3"/>
      <div className="flex items-center justify-between">
        <div>
            <p className="text-secondary font-light text-sm">© 2026 Crave. All rights reserved.</p>
        </div>
        <div className="flex items-center justify-center gap-4">
            <CreditCard size={20} className="text-secondary"/>
            <WalletMinimal size={20} className="text-secondary"/>
            <Cast size={20} className="text-secondary"/>
        </div>
        <div>
            <p className="text-primary font-mediium text-sm">Made for food lovers</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

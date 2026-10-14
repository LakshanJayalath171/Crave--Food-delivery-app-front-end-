import Sign_nav from "../components/Sign_nav"
import Login_img from "../assets/frontend_assets/login.jpg"
import { ArrowRight, CalendarDays, ClipboardList, Lock, LockKeyhole, Mail, Shield, User, UtensilsCrossed } from "lucide-react";
import BlinkingDot from "../components/Dot";
import { useNavigate } from "react-router-dom";

const SignUp = () => {

  const navigate = useNavigate();

  return (
    <div>
      {/* navbar */}
      <Sign_nav />

      {/* content */}
      <div className="w-full h-full flex items-center justify-center py-24">
        {/* left */}
        <div className="flex items-start justify-start">
          <div className="relative">
            <img src={Login_img} alt="login" className="w-100 h-150 rounded-2xl object-cover" />
            <div className="absolute inset-0 flex flex-col justify-between rounded-2xl bg-black/30 px-4 py-5">
              <div className="flex items-center justify-between gap-2">
                <div className="apple rounded-full px-3 py-1 text-[8px] text-on-dark">EPICUREAN CLUB</div>
                <div className="apple flex items-center justify-center gap-1 rounded-full px-3 py-1 text-[8px] text-on-dark">
                  <BlinkingDot color="bg-orange-500" size="w-1.5 h-1.5" />
                  Live in Colombo
                </div>
              </div>

              <div className="mt-auto space-y-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-1 text-[8px] font-bold uppercase text-on-dark">
                    <UtensilsCrossed size={9} />
                    Convivial table
                  </div>
                  <h1 className="text-xl font-bold leading-tight text-on-dark">Join the Crave community.</h1>
                  <p className="max-w-75 text-[9px] font-light leading-snug text-on-dark">Handpicked gourmet spots, lightning-fast delivery, and exclusive culinary rewards waiting for you.</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-3 rounded-lg bg-orange-950/35 px-3 py-2 text-on-dark backdrop-blur-sm">
                    <CalendarDays size={17} className="shrink-0 text-orange-400" />
                    <div className="leading-tight">
                      <p className="text-[8px] font-bold">Free delivery on your first 3 orders</p>
                      <p className="text-[8px] font-light opacity-80">Use welcome perk code CRAVEFIRST</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 rounded-lg bg-stone-900/35 px-3 py-2 text-on-dark backdrop-blur-sm">
                    <ClipboardList size={17} className="shrink-0 text-stone-300" />
                    <div className="leading-tight">
                      <p className="text-[8px] font-bold">100+ partner restaurants in Colombo</p>
                      <p className="text-[8px] font-light opacity-80">From wood-fired trattorias to artisanal patisseries</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* right */}
          <div className="px-6 py-3 flex items-center justify-center">
            <div>
                {/* header */}
                <div>
                    <h1 className="text-2xl font-bold text-main">Create your account</h1>
                    <p className="text-secondary font-light text-sm">Join Crave and discover food you'll truly love.</p>
                </div>

                <div className="mt-4">
                    <p className="text-main font-bold">Full Name</p>
                    <div className="flex items-center justify-start gap-1 w-full border-special px-3 py-2 rounded-lg">
                        <User size={15}/>
                        <input type="text" placeholder="Enter your full name" className="border-none outline-none focus-visible:outline-none text-sm"/>
                    </div>
                </div>

                <div className="mt-4">
                    <p className="text-main font-bold">Email Address</p>
                    <div className="flex items-center justify-start gap-1 w-full border-special px-3 py-2 rounded-lg">
                        <Mail size={15}/>
                        <input type="text" placeholder="Enter your email address" className="border-none outline-none focus-visible:outline-none text-sm"/>
                    </div>
                </div>

                <div className="mt-4">
                    <p className="text-main font-bold">Password</p>
                    <div className="flex items-center justify-start gap-1 w-full border-special px-3 py-2 rounded-lg">
                        <LockKeyhole size={15}/>
                        <input type="password" placeholder="Enter your password" className="border-none outline-none focus-visible:outline-none text-sm"/>
                    </div>
                </div>

                <div className="mt-4">
                    <p className="text-main font-bold">ConfirmPassword</p>
                    <div className="flex items-center justify-start gap-1 w-full border-special px-3 py-2 rounded-lg">
                        <Lock size={15}/>
                        <input type="password" placeholder="Confirm your password" className="border-none outline-none focus-visible:outline-none text-xs"/>
                    </div>
                </div>

                <div className="text-center mt-4 text-xs font-light text-secondary">
                    <p>I agree to the <span className="text-primary">Terms of Service</span> and <span className="text-primary">Privacy Policy.</span></p>
                </div>

                <div className="flex items-center justify-center mt-3 w-full h-full">
                    <div className="w-full h-full">
                        <button className="btn-primary flex items-center justify-center w-full h-full">Create Account <UtensilsCrossed size={20}/></button>
                    </div>
                </div>

                <div className="mt-6 flex items-center justify-between">
                    <p className="text-xs">Already have an account?</p>
                    <div className="flex items-center justify-center gap-1 cursor-pointer text-primary hover:underline">
                        <p className="text-xs " onClick={()=>navigate('/login')}>Sign in</p>
                        <ArrowRight size={15}/>
                    </div>
                </div>
                <p className="text-xs font-light text-primary flex items-center justify-start mt-10"><Shield size={15}/>Encrypted with 256-bit culinary trust protocol</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp
import Sign_nav from "../components/Sign_nav"
import Login_img from "../assets/frontend_assets/login.jpg"
import { ArrowRight, Lock, LockKeyhole, Mail, User, UtensilsCrossed } from "lucide-react";

const Login = () => {
  return (
    <div>
      {/* navbar */}
      <Sign_nav />

      {/* content */}
      <div className="w-full h-full flex items-center justify-center py-24">
        {/* left */}
        <div className="flex items-start justify-start">
          <div>
            <img src={Login_img} alt="login" className="w-[400px] h-[600px] rounded-lg" />
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
                        <p className="text-xs ">Sign in</p>
                        <ArrowRight size={15}/>
                    </div>
                </div>
            </div>

            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login
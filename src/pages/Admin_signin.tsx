import Sign_nav from "../components/Sign_nav";
import sign_up from "../assets/frontend_assets/admin login image.png";
import {
  ArrowRight,
  CalendarDays,
  ClipboardList,
  LockKeyhole,
  Mail,
  Shield,
  UtensilsCrossed,
} from "lucide-react";
import BlinkingDot from "../components/Dot";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axiosInstance from "../api/axiosInstance";
import { toast } from "react-toastify";
import { useAuthStore } from "../store/authStore";
import { socket } from "../lib/soket";

const Admin_signin = () => {
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = async () => {
    if (!email.trim() || !password) {
      toast.error("Please fill in all fields");
      return;
    }
    try {
      const response = await axiosInstance.post("/auth/admin/login", {
        email: email.trim(),
        password,
      });

      if (!response.data.success) {
        toast.error(response.data.message);
        return;
      }

      const { token, role } = response.data;

      if (role !== "admin") {
        toast.error("You are not authorized to access this page");
        return;
      }

      localStorage.setItem("token", token);
      axiosInstance.defaults.headers.common["Authorization"] =
        `Bearer ${token}`;
      useAuthStore.setState({ user: response.data, isAuthenticated: true });

      toast.success("Login successful");
      navigate("/admin/dashboard");
    } catch (error) {
      toast.error(error.message);
    }
  };

  socket.on("connect", () => {
    console.log("🟢 Admin Socket Connected:", socket.id);
  });

  socket.on("disconnect", (reason) => {
    console.log("🔴 Admin Socket Disconnected:", reason);
  });

  socket.on("connect_error", (error) => {
    console.error("❌ Admin Socket Error:", error.message);
  });

  return (
    <div>
      {/* navbar */}
      <Sign_nav />

      {/* content */}
      <div className="w-full h-full flex items-center justify-center py-24">
        {/* left */}
        <div className="flex items-start justify-start">
          <div className="relative">
            <img
              src={sign_up}
              alt="login"
              className="w-100 h-150 rounded-2xl object-cover"
            />
            <div className="absolute inset-0 flex flex-col justify-between rounded-2xl bg-black/30 px-4 py-5">
              <div className="flex items-center justify-between gap-2">
                <div className="apple rounded-full px-3 py-1 text-[8px] text-on-dark">
                  EPICUREAN CLUB
                </div>
                <div className="apple flex items-center justify-center gap-1 rounded-full px-3 py-1 text-[8px] text-on-dark">
                  <BlinkingDot color="bg-orange-500" size="w-1.5 h-1.5" />
                  Live in Colombo
                </div>
              </div>
            </div>
          </div>
          {/* right */}
          <div className="px-6 py-3 flex items-center justify-center">
            <div>
              {/* header */}
              <div>
                <h1 className="text-2xl font-bold text-main">
                  Welcome Admin🛠️
                </h1>
                <p className="text-secondary font-light text-sm">
                  Sign in to manage your admin panel
                </p>
              </div>

              <div className="mt-4">
                <p className="text-main font-bold">Username</p>
                <div className="flex items-center justify-start gap-1 w-full border-special px-3 py-2 rounded-lg">
                  <Mail size={15} />
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Enter your email address"
                    className="border-none outline-none focus-visible:outline-none text-sm"
                  />
                </div>
              </div>

              <div className="mt-4">
                <p className="text-main font-bold">Password</p>
                <div className="flex items-center justify-start gap-1 w-full border-special px-3 py-2 rounded-lg">
                  <LockKeyhole size={15} />
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="Enter your password"
                    className="border-none outline-none focus-visible:outline-none text-sm"
                  />
                </div>
              </div>
              <div className="flex items-center justify-center mt-3 w-full h-full">
                <div className="w-full h-full">
                  <button
                    onClick={loginHandler}
                    className="btn-primary flex items-center justify-center w-full h-full"
                  >
                    Sign In <UtensilsCrossed size={20} />
                  </button>
                </div>
              </div>

              <p className="text-xs font-light text-primary flex items-center justify-start mt-10">
                <Shield size={15} />
                Encrypted with 256-bit culinary trust protocol
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin_signin;

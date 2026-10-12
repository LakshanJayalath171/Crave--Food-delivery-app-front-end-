import Navbar from "../components/Navbar";
import profileImage from "../assets/admin_assets/profile_image.png";
import food_1 from "../assets/frontend_assets/food_1.png";
import BlinkingDot from "../components/Dot";
import {
  Bell,
  BuildingComplex,
  CreditCard,
  Heart,
  Home,
  LockKeyhole,
  LogOut,
  Navigation,
  NotebookPen,
  Pencil,
  Plus,
  Trash2,
  UserPen,
} from "lucide-react";
import { useState } from "react";
import Footer from "../components/Footer";

const Profile = () => {
  const [selectedTab, setSelectedTab] = useState("personalDetails");
  return (
    <div>
      {/* navbar */}
      <Navbar />
      {/* content */}
      <div className="px-10 py-6 w-screen h-screen">
        {/* header */}

        <div>
          <h1 className="text-3xl text-main font-bold">
            My <span className="text-primary">Profile</span>
          </h1>
          <p className="text-secondary text-xs font-light">
            Manage your personal details, delivery destinations, payment
            choices, and tailored culinary preferences.
          </p>
        </div>

        {/* content */}
        <div className="flex items-start justify-start gap-4">
          {/* sidebar */}
          <div className="w-1/4 h-full">
            {/* profile info */}
            <div className="flex items-center justify-center py-10">
              <div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-4">
                    <img
                      alt="profile"
                      src={profileImage}
                      className="w-24 h-24 rounded-full"
                    />
                  </div>
                  <h1 className="text-main font-bold text-lg">Alex Morgan</h1>
                  <p className="text-secondary text-xs font-light">
                    alex.morgan@example.com
                  </p>
                  <p className="text-main text-xs font-light">
                    +94 77 123 4567
                  </p>
                  <div className="flex items-center justify-center gap-2 mt-2">
                    <BlinkingDot color="bg-orange-500" size="w-2 h-2" />
                    <p className="text-main text-xs font-light ">
                      Verified Account •
                      <span className="text-secondary">
                        Member since Oct 2024
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* sidebar content */}

            <div className="w-full h-full">
              <div className="flex flex-col gap-2 px-3 py-1">
                {/* resusable card */}
                {/* profile */}
                <div
                  onClick={() => setSelectedTab("personalDetails")}
                  className="flex items-center justify-between w-full h-full cursor-pointer"
                >
                  <div className="flex flex-start gap-2">
                    <UserPen
                      size={20}
                      className={`${selectedTab === "personalDetails" ? "text-orange-500" : ""}`}
                    />
                    <p
                      className={`text-main font-bold ${selectedTab === "personalDetails" ? "text-orange-500" : ""}`}
                    >
                      Personal Details
                    </p>
                  </div>
                  <div className="flex items-center justify-end">
                    <div
                      className={`w-2 h-4 bg-orange-500 rounded-2xl ${selectedTab === "personalDetails" ? "block" : "hidden"}`}
                    ></div>
                  </div>
                </div>

                {/* saved addresses */}
                <div
                  onClick={() => setSelectedTab("savedAddresses")}
                  className="flex items-center justify-between w-full h-full cursor-pointer"
                >
                  <div className="flex flex-start gap-2">
                    <Navigation size={20} />
                    <p
                      className={`text-main font-bold ${selectedTab === "savedAddresses" ? "text-orange-500" : ""}`}
                    >
                      Saved Adresses
                    </p>
                  </div>
                  <div className="flex items-center justify-end">
                    <div
                      className={`w-2 h-4 bg-orange-500 rounded-2xl ${selectedTab === "savedAddresses" ? "block" : "hidden"}`}
                    ></div>
                  </div>
                </div>

                {/* payment */}

                <div
                  onClick={() => setSelectedTab("payment")}
                  className="flex items-center justify-between w-full h-full cursor-pointer"
                >
                  <div className="flex flex-start gap-2">
                    <CreditCard
                      className={`${selectedTab === "payment" ? "text-orange-500" : ""}`}
                      size={20}
                    />
                    <p
                      className={`text-main font-bold ${selectedTab === "payment" ? "text-orange-500" : ""}`}
                    >
                      Payment Methods
                    </p>
                  </div>
                  <div
                    className={`w-2 h-4 bg-orange-500 rounded-2xl ${selectedTab === "payment" ? "block" : "hidden"}`}
                  ></div>
                </div>

                {/* my orders */}
                <div
                  onClick={() => setSelectedTab("myOrders")}
                  className="flex items-center justify-between w-full h-full cursor-pointer"
                >
                  <div className="flex flex-start gap-2">
                    <NotebookPen
                      className={`${selectedTab === "myOrders" ? "text-orange-500" : ""}`}
                      size={20}
                    />
                    <p
                      className={`text-main font-bold ${selectedTab === "myOrders" ? "text-orange-500" : ""}`}
                    >
                      My Orders
                    </p>
                  </div>
                  <div
                    className={`w-2 h-4 bg-orange-500 rounded-2xl ${selectedTab === "myOrders" ? "block" : "hidden"}`}
                  ></div>
                </div>
                {/* fav */}
                <div
                  onClick={() => setSelectedTab("favoriteItems")}
                  className="flex items-center justify-between w-full h-full cursor-pointer"
                >
                  <div className="flex flex-start gap-2">
                    <Heart
                      className={`${selectedTab === "favoriteItems" ? "text-orange-500" : ""}`}
                      size={20}
                    />
                    <p
                      className={`text-main font-bold ${selectedTab === "favoriteItems" ? "text-orange-500" : ""}`}
                    >
                      Favorite Items
                    </p>
                  </div>
                  <div
                    className={`w-2 h-4 bg-orange-500 rounded-2xl ${selectedTab === "favoriteItems" ? "block" : "hidden"}`}
                  ></div>
                </div>
                {/* nofitications */}
                <div
                  onClick={() => setSelectedTab("notifications")}
                  className="flex items-center justify-between w-full h-full cursor-pointer"
                >
                  <div className="flex flex-start gap-2">
                    <Bell size={20} />
                    <p
                      className={`text-main font-bold ${selectedTab === "notifications" ? "text-orange-500" : ""}`}
                    >
                      Notifications
                    </p>
                  </div>
                  <div
                    className={`w-2 h-4 bg-orange-500 rounded-2xl ${selectedTab === "notifications" ? "block" : "hidden"}`}
                  ></div>
                </div>
                {/* security  */}
                <div
                  onClick={() => setSelectedTab("security")}
                  className="flex items-center justify-between w-full h-full cursor-pointer"
                >
                  <div className="flex flex-start gap-2">
                    <LockKeyhole
                      className={`${selectedTab === "security" ? "text-orange-500" : ""}`}
                      size={20}
                    />
                    <p
                      className={`text-main font-bold ${selectedTab === "security" ? "text-orange-500" : ""}`}
                    >
                      Security
                    </p>
                  </div>
                  <div
                    className={`w-2 h-4 bg-orange-500 rounded-2xl ${selectedTab === "security" ? "block" : "hidden"}`}
                  ></div>
                </div>

                {/* Active order */}
                <div className="mt-2">
                  <div className="flex items-center justify-between">
                    <h1 className="text-primary text-xs font-semibold">
                      Active Order
                    </h1>
                    <p className="text-xs font-light text-secondary ">
                      Order #12345
                    </p>
                  </div>

                  <div className="mt-2 flex items-center justify-start gap-3">
                    <img src={food_1} className="rounded-lg w-10 h-12" />
                    <div>
                      <h1 className="text-main font-bold text-sm">
                        Crispy Corner
                      </h1>
                      <div className="flex items-center justify-start gap-2">
                        <BlinkingDot color="bg-blue-500" size="w-2 h-2" />
                        <p className="text-primary font-light text-xs">
                          Kitchen is preparing...
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* sign out */}
                <div className="w-full h-full relative bottom-0 mt-10">
                  <button className="btn-primary w-full">
                    <LogOut /> Log out
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* content */}
          <div className="w-3/4 h-full overflow-y-auto ">
            {/* personal information */}
            <div className="mt-10">
              <div>
                <h1 className="text-main font-bold text-lg">
                  Personal Information
                </h1>
                <p className="text-sm font-light text-secondary">
                  Update your verified personal details and contact preferences.
                </p>
              </div>

              <div className="w-full h-full grid grid-cols-2 gap-3">
                {/* left column */}
                <div className="w-full h-full grid grid-rows-3">
                  <div className="mt-2">
                    <h2>First Name</h2>
                    <input
                      type="text"
                      placeholder="First Name"
                      className="input-special w-full "
                    />
                  </div>
                  <div className="mt-2">
                    <h2>Email Address</h2>
                    <input
                      type="text"
                      placeholder="alex.morgan@example.com"
                      className="input-special w-full "
                    />
                  </div>
                  <div className="mt-2">
                    <h2>Date of Birth</h2>
                    <input
                      type="date"
                      placeholder="08/08/1990"
                      className="input-special w-full "
                    />
                  </div>
                </div>
                {/* right column */}
                <div className="w-full h-full grid grid-rows-3">
                  <div className="mt-2">
                    <h2>Last Name</h2>
                    <input
                      type="text"
                      placeholder="Morgan"
                      className="input-special w-full "
                    />
                  </div>
                  <div className="mt-2">
                    <h2>Phone Number</h2>
                    <input
                      type="text"
                      placeholder="77 123 4567"
                      className="input-special w-full "
                    />
                  </div>
                  <div className="flex items-center justify-start gap-2 mt-6">
                    <button className="btn-ghost">Discard</button>
                    <button className="btn-primary">Save Changes</button>
                  </div>
                </div>
              </div>
            </div>

            {/* address information */}
            <div className="mt-10">
              {/* headers */}
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-main font-bold text-lg">
                    Delivery Addresses
                  </h1>
                  <p className="text-sm font-light text-secondary">
                    Where should we deliver your favorite warm feasts?
                  </p>
                </div>
                <div>
                  <button className="btn-ghost flex items-center justify-center gap-3">
                    Add New <Plus />
                  </button>
                </div>
              </div>

              {/* addresses */}

              <div className="grid grid-cols-2 gap-6">
                {/* address 01 */}
                <div>
                  {/* reusable address card */}
                  <div className="mt-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center justify-start gap-2">
                        <Home size={20} className="text-primary" />
                        <h2 className="text-main font-semibold">Home</h2>
                      </div>
                      <div className="text-main font-light text-xs bg-primary rounded-lg px-3 py-1">
                        Default
                      </div>
                    </div>

                    <div>
                      <h2 className="text-main font-semibold text-md">
                        Alex Morgan
                      </h2>
                      <p className="text-secondary font-light text-xs">
                        123 Example Road, Wijerama,
                      </p>
                      <p className="text-secondary font-light text-xs">
                        Nugegoda, Western Province
                      </p>
                      <p className="text-secondary font-light text-xs">
                        Phone: +94 77 123 4567
                      </p>
                    </div>

                    <div className="flex items-center justify-end gap-2">
                      <button className="flex items-center justify-center gap-2 text-xs cursor-pointer">
                        <Pencil size={10} />
                        Edit
                      </button>
                      <button className="flex items-center justify-center gap-2 text-xs cursor-pointer">
                        <Trash2 size={10} />
                        Delete
                      </button>
                    </div>
                  </div>
                </div>

                {/* address 02 */}
                <div>
                  <div className="mt-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center justify-start gap-2">
                        <BuildingComplex size={20} className="text-primary" />
                        <h2 className="text-main font-semibold">Work</h2>
                      </div>
                    </div>

                    <div>
                      <h2 className="text-main font-semibold text-md">
                        Alex Morgan
                      </h2>
                      <p className="text-secondary font-light text-xs">
                        Example Business Center, Level 03,
                      </p>
                      <p className="text-secondary font-light text-xs">
                        Galle Road, Colombo 03
                      </p>
                      <p className="text-secondary font-light text-xs">
                        Phone: +94 77 123 4567
                      </p>
                    </div>

                    <div className="flex items-center justify-end gap-2">
                      <button className="flex items-center justify-center gap-2 text-xs cursor-pointer">
                        <Pencil size={10} />
                        Edit
                      </button>
                      <button className="flex items-center justify-center gap-2 text-xs cursor-pointer">
                        <Trash2 size={10} />
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* favourites */}
            <div className="mt-10">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-main font-bold text-lg">
                    Favorite Dishes
                  </h1>
                  <p className="text-sm font-light text-secondary">
                    Your frequently re-ordered gastronomic favorites.
                  </p>
                </div>
                <div>
                  <p className="text-primary font-light text-sm hover:underline cursor-pointer">View All (8)</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {/* right */}
                <div className="flex items-center justify-start gap-2 mt-4">
                  <div>
                    <img src={food_1} className="w-24 h-18 rounded-lg" />
                  </div>
                  <div>
                    <h1 className="text-lg font-semibold text-main">Napoli Margherita Pizza</h1>
                    <p className="text-xs text-secondary font-light">Trattoria Roma • 25 mins</p>
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-xs text-primary font-semibold">Rs. 2,450</p>
                      <button className="text-xs font-light text-main bg-amber-600 px-3 py-1 rounded-lg cursor-pointer">Reorder</button>
                    </div>
                  </div>
                </div>
                {/* left */}
                <div className="flex items-center justify-start gap-2 mt-4">
                  <div>
                    <img src={food_1} className="w-24 h-18 rounded-lg" />
                  </div>
                  <div>
                    <h1 className="text-lg font-semibold text-main">Claypot Black Pork Curry</h1>
                    <p className="text-xs text-secondary font-light">Ceylon Heritage • 35 mins</p>
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-xs text-primary font-semibold">Rs. 1,850</p>
                      <button className="text-xs font-light text-main bg-amber-600 px-3 py-1 rounded-lg cursor-pointer">Reorder</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Profile;

import { Link, useLocation } from "react-router";
import useAuthUser from "../hooks/useAuthUser";
import { BellIcon, LogOutIcon } from "lucide-react";
import ThemeSelector from "./ThemeSelector";
import useLogout from "../hooks/useLogout";

const Navbar = () => {
  const { authUser } = useAuthUser();
  const location = useLocation();
  const isChatPage = location.pathname?.startsWith("/chat");
  const { logoutMutation } = useLogout();

  return (
    <nav className="bg-gray-900 border-b border-gray-700 sticky top-0 z-30 h-16 flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between w-full">
          {isChatPage && (
            <div className="pl-2 sm:pl-5">
              <Link to="/" className="flex items-center gap-2.5">
                <span className="text-3xl font-bold font-mono bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 tracking-wider">
                  QuickConnect
                </span>
              </Link>
            </div>
          )}

          {/* Right Side Controls */}
          <div className="flex items-center gap-3 sm:gap-4 ml-auto">
            
            {/* Notifications */}
            <Link to="/notifications">
              <button className="btn btn-ghost btn-circle">
                <BellIcon className="h-6 w-6 text-gray-200 opacity-70 hover:opacity-100 transition" />
              </button>
            </Link>

            {/* Theme Switcher */}
            <ThemeSelector />

            {/* User Avatar */}
            {authUser && (
              <div className="avatar">
                <div className="w-9 rounded-full border border-gray-700 overflow-hidden">
                  <img
                    src={
                      authUser?.profilePic ||
                      `https://ui-avatars.com/api/?name=${encodeURIComponent(
                        authUser?.fullName || "User"
                      )}&background=random`
                    }
                    alt="User Avatar"
                  />
                </div>
              </div>
            )}

            {authUser && (
              <button
                className="btn btn-ghost btn-circle"
                onClick={logoutMutation}
              >
                <LogOutIcon className="h-6 w-6 text-gray-200 opacity-70 hover:opacity-100 transition" />
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

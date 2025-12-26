import React, { useEffect, useState } from "react";
import { getStoredAdminData, getProfile } from "../../apis/admin";
import "./Navbar.css";

interface NavbarProps {
  toggleSidebar: () => void;
  sidebarOpen: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ toggleSidebar, sidebarOpen }) => {
  const [adminData, setAdminData] = useState<any>(null);

  useEffect(() => {
    // Load admin data from localStorage first
    const storedData = getStoredAdminData();
    if (storedData) {
      setAdminData(storedData);
    }

    // Optionally fetch fresh data from API
    const fetchProfile = async () => {
      try {
        const response = await getProfile();
        if (response.success && response.data?.admin) {
          setAdminData(response.data.admin);
        }
      } catch (error) {
        console.error("Error fetching profile:", error);
        // Keep using stored data if API call fails
      }
    };

    fetchProfile();
  }, []);
  return (
    <header className="navbar">
      {/* Mobile Menu Toggle Button */}
      <button
        className={`mobile-menu-toggle ${sidebarOpen ? "active" : ""}`}
        onClick={toggleSidebar}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className="navbar-container">
        <div className="search-section">
          <div className="search-container">
            <div className="search-icon-wrapper">
              <img
                src="/search.svg"
                alt="Search"
                className="search-icon"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                  const fallback = document.createElement("div");
                  fallback.className = "search-icon-fallback";
                  fallback.innerHTML = "🔍";
                  target.parentNode?.appendChild(fallback);
                }}
              />
            </div>

            <input type="text" className="search-input" placeholder="Search" />
          </div>
        </div>

        <div className="right-section">
          <div className="notification-icon">
            <img
              src="/notification.svg"
              alt="Notifications"
              className="bell-icon"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = "none";
                const fallback = document.createElement("div");
                fallback.className = "bell-fallback";
                fallback.innerHTML = "🔔";
                target.parentNode?.appendChild(fallback);
              }}
            />
            <span className="notification-badge">3</span>
          </div>

          <div className="admin-text">
            <p className="admin-name">{adminData?.name || "Admin"}</p>
            <p className="admin-role">{adminData?.role || "Admin"}</p>
          </div>

          <div className="profile-photo">
            <img
              src="/profile-photo.jpg"
              alt={adminData?.name || "Admin"}
              className="profile-image"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = "none";
                const fallback = document.createElement("div");
                fallback.className = "photo-fallback";
                fallback.textContent = adminData?.name
                  ? adminData.name
                      .split(" ")
                      .map((n: string) => n[0])
                      .join("")
                      .toUpperCase()
                  : "A";
                target.parentNode?.appendChild(fallback);
              }}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

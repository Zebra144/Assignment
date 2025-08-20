import React,{useState} from "react";

const Sidebar = ({ page, setPage, user }) => {
const [collapsed, setCollapsed] = useState(false);

 return (
    <aside className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      {/* BLUE HEADER BAND */}
      <div className="sidebar-header">
        <button
          className="collapse-btn"
          onClick={() => setCollapsed(!collapsed)}
          aria-label={collapsed ? "Expand" : "Collapse"}
          title={collapsed ? "Expand" : "Collapse"}
        >
          {collapsed ? "▶" : "◀"}
        </button>
      </div>

  
      <div className="sidebar-body">
        {!collapsed && (
          <div className="user-info">
            <img src={user.avatar} alt="User" className="avatar" />
            <h3>{user.name}</h3>
          </div>
        )}

        <button
          className={`nav-btn ${page === "profile" ? "active" : ""}`}
          onClick={() => setPage("profile")}
          title="Profile"
        >
          <span className="nav-icon">👤</span>
          <span className="nav-label">Profile</span>
        </button>

        <button
          className={`nav-btn ${page === "articles" ? "active" : ""}`}
          onClick={() => setPage("articles")}
          title="My Articles"
        >
          <span className="nav-icon">📰</span>
          <span className="nav-label">My Articles</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;

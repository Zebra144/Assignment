import React, { useState } from "react";
import Profile from "./pages/Profile";
import Articles from "./pages/Articles";
import "./App.css";
import zebraPhoto from "./assets/zebra.jpg";


const App = () => {

  const [page, setPage] = useState("profile");


  const user = {
    name: "Shihab Sharar",
    email: "shihab.cse.20230104144@aust.edu",
    avatar: zebraPhoto, // use your zebra image
  };

  return (
    <div className="app-layout">
      <aside className="sidebar">
        <div className="user-info">
          <img src={user.avatar} alt="User Avatar" className="avatar" />
          <h3>{user.name}</h3>
        </div>

        <button
          className={page === "profile" ? "active" : ""}
          onClick={() => setPage("profile")}
        >
          Profile
        </button>
        <button
          className={page === "articles" ? "active" : ""}
          onClick={() => setPage("articles")}
        >
          Articles
        </button>
      </aside>

      <main className="main-content">
        {page === "profile" && <Profile user={user} />}
        {page === "articles" && <Articles />}
      </main>
    </div>
  );
};


export default App;
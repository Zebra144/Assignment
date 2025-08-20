import React, { useState } from "react";
import Profile from "./pages/Profile";
import Sidebar from "./component/Sidebar"; 
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
      <Sidebar page={page} setPage={setPage} user={user} />


      <main className="main-content">
        {page === "profile" && <Profile user={user} />}
        {page === "articles" && <Articles />}
      </main>
    </div>
  );
};


export default App;
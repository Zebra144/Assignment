import React from "react";

const Profile = ({ user }) => {
  return (
    <div className="profile-page">
      <h2>Profile Page</h2>
      <img
       src={user.avatar}
        alt="Profile"
        className="profile-avatar"
      />
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
    </div>
      );
};

export default Profile;

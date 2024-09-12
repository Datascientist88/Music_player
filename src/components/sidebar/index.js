import React, { useEffect, useState } from "react";
import "./sidebar.css";
import SidebarButton from "./sidebarButton";
import { MdFavorite, MdSpaceDashboard } from "react-icons/md";
import { FaGripfire, FaPlay, FaSignOutAlt } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import apiClient from "../../spotify";

export default function Sidebar() {
  const [image, setImage] = useState("https://img.freepik.com/free-photo/volumetric-musical-background-with-treble-clef-notes-generative-ai_169016-29576.jpg?t=st=1726132145~exp=1726135745~hmac=ce5093a04938e0ad84686c41901b887c7eceb22dcc6904c9079c7f3e6990d641&w=1380");

  useEffect(() => {
    apiClient.get("me")
      .then(response => {
        setImage(response.data.images[0].url);
        // You can set user data here if needed
      })
      .catch(error => {
        console.error("Error fetching user data:", error);
      });
  }, []);

  return (
    <div className="sidebar-container">
      <img
        src={image}
        className="profile-image"
        alt="profile"
      />
      <div>
        <SidebarButton title="Feed" to="/feed" icon={<MdSpaceDashboard />} />
        <SidebarButton title="Trending" to="/trending" icon={<FaGripfire />} />
        <SidebarButton title="Player" to="/player" icon={<FaPlay />} />
        <SidebarButton title="Favorites" to="/favorites" icon={<MdFavorite />} />
        <SidebarButton title="Library" to="/" icon={<IoLibrary />} />
      </div>
      <SidebarButton title="Sign Out" to="" icon={<FaSignOutAlt />} />
    </div>
  );
}
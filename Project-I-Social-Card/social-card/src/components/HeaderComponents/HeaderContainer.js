import React from "react";

import ImageThumbnail from "./ImageThumbnail";
import HeaderContent from "./HeaderContent";

import "./Header.css";

const HeaderContainer = () => {
  return (
    <div class="header">
      <ImageThumbnail />
      <HeaderContent />
    </div>
  );
};

export default HeaderContainer;

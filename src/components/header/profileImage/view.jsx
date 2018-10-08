import React from "react";

export const ProfileImageView = props => {
  return (
    <div className="ProfileImage">
      <img
        src={props.userImage}
        alt="Your Profile Picture"
        width="35"
        height="35"
      />
    </div>
  );
};

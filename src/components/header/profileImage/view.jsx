import React from "react";

import { PALETTE } from "../../../constants/palette";

const style = {
  profileImage: {
    marginTop: "10px"
  }
};

export const ProfileImageView = props => {
  return (
    <div style={style.profileImage}>
      <img
        src={props.userImage}
        alt="Your Profile Picture"
        width="35"
        height="35"
      />
    </div>
  );
};

import React from "react";

import { PALETTE } from "../../../constants/palette";

const style = {
  loginButton: {
    background: PALETTE.orangeLight,
    color: PALETTE.greyB,
    border: "none",
    margin: "25px",
    padding: "7px 4px"
  }
};

export const LoginButtonView = props => {
  return (
    <div>
      <button style={style.loginButton} onClick={props.googleLogin}>
        LOGIN
      </button>
    </div>
  );
};

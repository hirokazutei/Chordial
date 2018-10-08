import React from "react";

export const LoginButtonView = props => {
  return (
    <div>
      <button className="LoginButton" onClick={props.googleLogin}>
        LOGIN
      </button>
    </div>
  );
};

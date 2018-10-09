import React from "react";

import Section from "./section/index";
import AddNewSection from "./addNewSection/index";
import SongInfo from "./songInfo/index";

const style = {
  body: {
    position: "relative",
    overflow: "scroll",
    height: "80%;"
  }
};

export const BodyView = props => {
  return (
    <div style={style.body}>
      <SongInfo />
      {props.sections.map(section => (
        <Section
          sectionID={section.id}
          sectionIndex={props.sections.indexOf(section)}
          key={section.id}
        />
      ))}
      <AddNewSection />
    </div>
  );
};

import React from "react";

import Section from "./section/index";
import AddNewSection from "./addNewSection/index";
import SongInfo from "./songInfo/index";

export const BodyView = props => {
  return (
    <div>
      <SongInfo />
      {props.sections.map(section => (
        <Section
          sectionID={section.id}
          sectionIndex={props.sections.indexOf(section)}
          key={section.id}
        />
      ))}
      <AddNewSection />
      <div className="Break" />
    </div>
  );
};

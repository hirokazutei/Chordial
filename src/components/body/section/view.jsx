import React, { Component } from "react";
import AddNewChord from "./addNewChord/index";
import SectionTitle from "./sectionTitle/index";
import DeleteSectionButton from "./deleteSectionButton/index";

export const SectionView = props => {
  return (
    <div>
      <SectionTitle
        sectionID={props.sectionID}
        sectionIndex={props.sectionIndex}
      />
      <div className="ChordsDisplay">
        {props.showChords()}
        <AddNewChord sectionIndex={props.sectionIndex} />
      </div>

      <DeleteSectionButton sectionID={props.sectionID} />
    </div>
  );
};

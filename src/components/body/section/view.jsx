import React, { Component } from "react";

import { PALETTE } from "../../../constants/palette";

import AddNewChord from "./addNewChord/index";
import SectionTitle from "./sectionTitle/index";
import DeleteSectionButton from "./deleteSectionButton/index";
import Chord from "./chord/index";

const style = {
  chordsDisplay: {
    display: "grid",
    width: "90%",
    padding: "10px 20px",
    gridGap: "5px",
    gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
    background: PALETTE.greyD,
    height: "220px",
    justifyContent: "center",
    margin: "auto"
  }
};

export const SectionView = props => {
  return (
    <div>
      <SectionTitle
        sectionID={props.sectionID}
        sectionIndex={props.sectionIndex}
      />
      <div style={style.chordsDisplay}>
        {props.showChords ? (
          props.sections[props.sectionIndex].chords.map(chord => (
            <Chord
              key={chord.id}
              chordKey={chord.chordKey}
              chordID={chord.id}
            />
          ))
        ) : (
          <h2>ADD CHORDS!</h2>
        )}
        <AddNewChord sectionID={props.sectionID} />
      </div>
      <DeleteSectionButton sectionID={props.sectionID} />
    </div>
  );
};

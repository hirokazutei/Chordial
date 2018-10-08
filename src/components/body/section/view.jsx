import React, { Component } from "react";

import AddNewChord from "./addNewChord/index";
import SectionTitle from "./sectionTitle/index";
import DeleteSectionButton from "./deleteSectionButton/index";
import Chord from "./chord/index";

export const SectionView = props => {
  return (
    <div>
      <SectionTitle
        sectionID={props.sectionID}
        sectionIndex={props.sectionIndex}
      />
      <div className="ChordsDisplay">
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

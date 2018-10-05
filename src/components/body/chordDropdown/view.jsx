





      <div className="dropdown">
      <button
        title={this.determineTitle(this.props.chord)}
        key={this.props.chordID}
        id={`dropdown-basic-${this.props.chordID}`}
        bsStyle="info"
        className="DropDownButton"
      >
        {this.determineTitle(this.props.chord)}
      </button>
      <div className="dropdown-content">{KEYS.map(this.renderDropdown)}</div>
    </div>
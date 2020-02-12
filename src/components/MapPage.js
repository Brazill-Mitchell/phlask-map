import React, { Component } from "react";
import Head from "./Head";
import ReactGoogleMaps from "./ReactGoogleMaps";

export class MapPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ada: false,
      filtered: false,
      tapsDisplayed: ["Public", "Private", "Private-Shared", "Restricted"]
    };

    this.legendButton = this.legendButton.bind(this);
    this.toggleSwitch = this.toggleSwitch.bind(this);
  }

  //Toggles wether color is in the tapsDisplayed array or not
  legendButton(color) {
    const taps = [...this.state.tapsDisplayed];
    console.log(color, taps);

    if (taps.includes(color)) {
      //removes color form tapsDisplayed array
      const filteredTaps = taps.filter(item => item !== color);
      this.setState({ tapsDisplayed: filteredTaps });
    } else {
      //adds color to tapsDisplayed array
      this.setState({ tapsDisplayed: [...this.state.tapsDisplayed, color] });
    }
  }

  toggleSwitch(type, position) {
    switch (type) {
      case "ada":
        return this.setState({ ada: position });
      case "filtered":
        return this.setState({ filtered: position });
    }
  }

  render() {
    console.log("map page says filtered", this.state.filtered);
    return (
      <div className="MapPage">
        <Head
          legendButton={this.legendButton}
        />
        <ReactGoogleMaps
          tapsDisplayed={this.state.tapsDisplayed}
          ada={this.state.ada}
          filtered={this.state.filtered}
        />
      </div>
    );
  }
}

export default MapPage;
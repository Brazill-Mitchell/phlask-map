import React, { Component } from "react";
import { Card} from "react-bootstrap";
import AddTapModal from './AddTapModal'

export class ClosestTap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: <p style={{ display: "inline-block" }}>Click for nearest tap!</p>,
      show: false,
      tapOpen: false
    };

    this.change = this.change.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleShow = this.handleShow.bind(this);
  }

  change() {
    if (this.props.lat === "" || this.props.lon === "") {
      this.setState({
        text: (
          <p>
            The closest tap feature is unavailable. We require permission to
            access your location to provide it.
          </p>
        )
      });
    }else{
      if(this.state.tapOpen === true){
        this.setState({
          tapOpen: false,
          text: <p style={{ display: "inline-block" }}>Click for nearest tap!</p>,
        });
      }
      else {
        this.setState({
          tapOpen: true,
          text: (
            <p style={{ display: "inline-block" }}>
              The closest tap is: {this.props.org} <br />
              Located at: &nbsp;
              <a
                href={
                  "https://www.google.com/maps/search/?api=1&query=" +
                  this.props.lat +
                  ", " +
                  this.props.lon
                }
              >
                {this.props.address}
              </a>
            </p>
          )
        });
      }
    }
      
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    return (
      <div className="closestTap">
        <Card>
          <Card.Header
            onClick={this.change}
            style={{ display: "inline", paddingBottom: "0px" }}
          >
            {this.state.text}
            <img
              alt="addTapButton"
              onClick={this.handleShow}
              title="Add a new tap"
              className="add-tap"
              src="https://image.flaticon.com/icons/png/512/61/61112.png"
            ></img>
          </Card.Header>
        </Card>
        <AddTapModal show={this.state.show} hide={this.handleClose}/>
        
      </div>
    );
  }
}

export default ClosestTap;

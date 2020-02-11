import React, { Component } from "react";
import {
  Modal,
  Button,
  Form,
  OverlayTrigger,
  Tooltip,
  Popover
} from "react-bootstrap";
import ImageUploader from 'react-images-upload';

export class AddTapModal extends Component {
  constructor(props) {
    super(props);
    this.state = { pictures: [] };
  }

  onDrop(picture) {
    this.setState({
        pictures: this.state.pictures.concat(picture),
    });
  }

  

  render() {
    const popoverAccess = (
      <Popover id="popover-access">
        <Popover.Title as="h3">Tap Access Types</Popover.Title>
        <Popover.Content>
          <strong>Public</strong> - This tap resides in a public space (e.g. a
          water fountain in a park)
          <br></br>
          <strong>Private</strong> - This tap resides in a private space (e.g.
          inside a retail store or cafe)
        </Popover.Content>
      </Popover>
    );
    // const popoverFilter = (
    //   <Popover id="popover-filter">
    //     <Popover.Title as="h3">Filtration Types</Popover.Title>
    //     <Popover.Content>
    //       <strong>Yes</strong> - This tap is filtered
    //       <br></br>
    //       <strong>Private</strong> - This tap is not filtered
    //     </Popover.Content>
    //   </Popover>
    // );
    return (
      <Modal show={this.props.show} onHide={this.props.hide}>
        <Modal.Header closeButton>
          <Modal.Title>Submit a Tap!</Modal.Title>
        </Modal.Header>
        <Form>
          <Modal.Body>
            <Form.Group controlId="Address">
              <Form.Label>
                <strong>Address</strong>
              </Form.Label>
              <Form.Control />
            </Form.Group>
            <Form.Group controlId="City">
              <Form.Label>
                <strong>City</strong>
              </Form.Label>
              <Form.Control />
            </Form.Group>
            <Form.Group controlId="Description">
              <Form.Label>
                <strong>Description</strong>
              </Form.Label>
              <Form.Control
                as="textarea"
                rows="2"
                placeholder="A brief description of the tap's location and appearance"
              />
            </Form.Group>
            <OverlayTrigger
              delay={{ show: 500, hide: 400 }}
              placement="right"
              overlay={popoverAccess}
            >
              <Form.Group>
                <Form.Label as="legend">
                  <strong>Access to Tap</strong>
                </Form.Label>

                <Form.Check
                  type="radio"
                  label="Public"
                  name="AccessRadios"
                  id="AccessRadio1"
                />

                <Form.Check
                  type="radio"
                  label="Private"
                  name="AccessRadios"
                  id="AccessRadio2"
                />
              </Form.Group>
            </OverlayTrigger>
            <h5>Additional Information</h5>
            <Form.Group controlId="Organization">
              <Form.Label>
                <strong>Organization</strong>
              </Form.Label>
              <Form.Control placeholder="What organization/company does this tap belong to?" />
            </Form.Group>

            <Form.Group>
              <Form.Label as="legend">
                <strong>Filtration</strong>
              </Form.Label>

              <Form.Check
                type="radio"
                label="Yes"
                name="FilterRadios"
                id="FilterRadios1"
              />

              <Form.Check
                type="radio"
                label="No"
                name="FilterRadios"
                id="FilterRadios2"
              />
            </Form.Group>

            <Form.Group>
              <Form.Label as="legend">
                <strong>Handicap Accessible</strong>
              </Form.Label>

              <Form.Check
                type="radio"
                label="Yes"
                name="HandicapRadios"
                id="HandicapRadios1"
              />

              <Form.Check
                type="radio"
                label="No"
                name="HandicapRadios"
                id="HandicapRadios2"
              />
            </Form.Group>

            <Form.Group>
              <Form.Label as="legend">
                <strong>Tap Service Type</strong>
              </Form.Label>

              <Form.Check
                type="radio"
                label="Self-serve"
                name="ServiceRadios"
                id="ServiceRadios1"
              />

              <Form.Check
                type="radio"
                label="Ask proprietor"
                name="ServiceRadios"
                id="ServiceRadios2"
              />
            </Form.Group>

            <Form.Group>
              <Form.Label as="legend">
                <strong>Tap Type</strong>
              </Form.Label>

              <Form.Check
                type="radio"
                label="Drinking Foutain"
                name="TypeRadios"
                id="TypeRadios1"
              />

              <Form.Check
                type="radio"
                label="Bottle filler and fountain"
                name="TypeRadios"
                id="TypeRadios2"
              />

              <Form.Check
                type="radio"
                label="Sink"
                name="TypeRadios"
                id="TypeRadios3"
              />

              <Form.Check
                type="radio"
                label="Soda fountain"
                name="TypeRadios"
                id="TypeRadios4"
              />

              <Form.Check
                type="radio"
                label="Dedicated water dispenser"
                name="TypeRadios"
                id="TypeRadios5"
              />

              <Form.Check
                type="radio"
                label="Water cooler"
                name="TypeRadios"
                id="TypeRadios6"
              />

              <Form.Check
                type="radio"
                label="Other"
                name="TypeRadios"
                id="TypeRadios7"
              />
            </Form.Group>

            <Form.Group>
              <Form.Label as="legend">
                <strong>Water Vessel Needed</strong>
              </Form.Label>

              <Form.Check
                type="radio"
                label="Yes"
                name="VesselRadios"
                id="VesselRadios1"
              />

              <Form.Check
                type="radio"
                label="No"
                name="VesselRadios"
                id="VesselRadios2"
              />
            </Form.Group>

            <Form.Group controlId="Phlask Statement">
              <Form.Label>
                <strong>PHLASK Statement</strong>
              </Form.Label>
              <Form.Control
                as="textarea"
                rows="2"
                placeholder="Please use this section to make any statement about your organization or enterprise!"
              />
            </Form.Group>

            <Form.Group controlId="Norms and Rules">
              <Form.Label>
                <strong>Norms and Rules</strong>
              </Form.Label>
              <Form.Control
                as="textarea"
                rows="3"
                placeholder="PHLASKing is intended to be an unobtrusive part of doing business. If there are special norms associated with accessing water, please use this space to describe them."
              />
            </Form.Group>
            <ImageUploader
                withIcon={true}
                buttonText='Choose images'
                onChange={this.onDrop}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.hide}>
              Close
            </Button>
            <Button variant="primary" onClick={this.props.hide}>
              Submit
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    );
  }
}

export default AddTapModal;

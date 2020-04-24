import React, { Component } from "react";

import Modal from "../components/Modal/Modal";
import Backdrop from "../components/Backdrop/Backdrop";
import "./Events.css";

class EventsPage extends Component {
  state = {
    creating: false,
  };

  startCreateEventHandler = () => {
    this.setState({ creating: true });
  };

  modalConfirmHandler = () => {
    this.setState({ creating: false });
  };

  modalCancelHandler = () => {
    this.setState({ creating: false });
  };

  render() {
    return (
      <>
        {this.state.creating && (
          <>
            <Backdrop />
            <Modal
              title="Modal header"
              canCancel
              canConfirm
              onCancel={this.modalCancelHandler}
              onConfirm={this.modalConfirmHandler}
            >
              <p>Modal content</p>
            </Modal>
          </>
        )}
        <div className="events-control">
          <p>Share your own Events</p>
          <button className="btn" onClick={this.startCreateEventHandler}>
            Create
          </button>
        </div>
      </>
    );
  }
}

export default EventsPage;

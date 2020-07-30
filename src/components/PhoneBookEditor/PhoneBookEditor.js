import React, { Component } from "react";
import { connect } from "react-redux";
import contactsOperations from "../../redux/contacts/contactsOperations";
import contactsSelectors from "../../redux/contacts/contactsSelectors";

import styles from "./PhoneBookEditor.module.css";
import PhoneBookNotification from "../PhoneBookNotification/PhoneBookNotification";
import { TextField, Button } from "@material-ui/core";
import { CSSTransition } from "react-transition-group";

class PhoneBookEditor extends Component {
  state = {
    name: "",
    number: "",
    error: "",
    animation: false,
  };

  setAnimate = () => this.setState({ animate: !this.state.animate });

  handleChangeName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  handleChangeNumber = (e) => {
    this.setState({
      number: e.target.value,
    });
  };

  handleSubmit = (e) => {
    const { name, number } = this.state;
    const { contacts } = this.props;
    const isExistName = contacts.find((contact) => contact.name === name);
    const isExistNumber = contacts.find((contact) => contact.number === number);

    e.preventDefault();

    if (isExistName) {
      return this.setState({
        animation: true,
        error: `${name} is already in contacts`,
      });
    }

    if (isExistNumber) {
      return this.setState({
        animation: true,
        error: `${number} is already in contacts`,
      });
    }

    if (name.length <= 0 || number.length <= 0) {
      return this.setState({
        animation: true,
        error: "Fields must not be empty",
      });
    }

    this.props.onAddContact({ name, number });

    this.setState({ name: "", number: "" });
  };

  render() {
    return (
      <>
        <CSSTransition
          in={this.state.animation}
          classNames={{
            enter: styles.notificationFadeEnter,
            enterActive: styles.notificationFadeEnterActive,
            exit: styles.notificationFadeExit,
            exitActive: styles.notificationFadeExitActive,
          }}
          mountOnEnter
          onEntered={() => this.setState({ animation: false })}
          unmountOnExit
          timeout={1500}
        >
          <PhoneBookNotification error={this.state.error} />
        </CSSTransition>
        <form onSubmit={this.handleSubmit}>
          <TextField
            className={styles.fieldNameInput}
            id="outlined-basic"
            label="Name"
            variant="outlined"
            type="text"
            onChange={this.handleChangeName}
            value={this.state.name}
          />

          <TextField
            className={styles.fieldNameInput}
            id="outlined-basic"
            label="Number"
            variant="outlined"
            type="text"
            onChange={this.handleChangeNumber}
            value={this.state.number}
          />

          <Button
            className={styles.addItemButton}
            variant="contained"
            size="medium"
            color="primary"
            type="submit"
          >
            Add contact
          </Button>
        </form>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  contacts: contactsSelectors.getContacts(state),
});

const mapDispatchToProps = {
  onAddContact: contactsOperations.addContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(PhoneBookEditor);

import React from "react";
import { connect } from "react-redux";
import contactsActions from "../../redux/contacts/contactsActions";
import contactsSelectors from "../../redux/contacts/contactsSelectors";
import { Paper, TextField } from "@material-ui/core";
import styles from "./PhoneBookFilter.module.css";
import { CSSTransition } from "react-transition-group";

const Filter = ({ value, onChangeFilter, contacts }) => {
  return (
    <CSSTransition
      in={contacts.length > 1}
      timeout={250}
      classNames={{
        enter: styles.filterFadeEnter,
        enterActive: styles.filterFadeEnterActive,
        exit: styles.filterFadeExit,
        exitActive: styles.filterFadeExitActive,
      }}
      unmountOnExit
    >
      <Paper className={styles.section}>
        <TextField
          label="Find contacts by name"
          id="outlined-basic"
          variant="outlined"
          type="text"
          value={value}
          onChange={(e) => onChangeFilter(e.target.value)}
        />
      </Paper>
    </CSSTransition>
  );
};

const mapStateToProps = (state) => ({
  value: contactsSelectors.getFilter(state),
  contacts: contactsSelectors.getContacts(state),
});

const mapDispatchToProps = {
  onChangeFilter: contactsActions.changeFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

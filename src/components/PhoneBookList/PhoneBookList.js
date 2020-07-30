import React from "react";
import PhoneBookItem from "../PhoneBookItem/PhoneBookItemContainer";
import { connect } from "react-redux";
import contactsSelectors from "../../redux/contacts/contactsSelectors";
import styles from "./PhoneBookList.module.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const PhoneBookList = ({ contacts }) => {
  return (
    contacts.length > 0 && (
      <TransitionGroup component="ul" className={styles.listContainer}>
        {contacts.map(({ id, name, number }) => (
          <CSSTransition
            key={id}
            timeout={250}
            classNames={{
              enter: styles.itemFadeEnter,
              enterActive: styles.itemFadeEnterActive,
              exit: styles.itemFadeExit,
              exitActive: styles.itemFadeExitActive,
            }}
          >
            <PhoneBookItem id={id} name={name} number={number} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    )
  );
};

const mapStateToProps = (state) => ({
  contacts: contactsSelectors.getVisibleContacts(state),
});

export default connect(mapStateToProps)(PhoneBookList);

// PhoneBookList.propTypes = {
//   options: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired
//     })
//   )
// };

import { connect } from "react-redux";
import PhoneBookItem from "./PhoneBookItem";
import contactsOperations from "../../redux/contacts/contactsOperations";
import contactsSelectors from "../../redux/contacts/contactsSelectors";

const mapState = (state, ownProps) => {
  const contact = contactsSelectors.getContactById(state, ownProps.id);

  return {
    ...contact,
  };
};

const mapDispatchToProps = (dispatch, { id }) => ({
  onRemove: () => dispatch(contactsOperations.removeContact(id)),
});

export default connect(mapState, mapDispatchToProps)(PhoneBookItem);

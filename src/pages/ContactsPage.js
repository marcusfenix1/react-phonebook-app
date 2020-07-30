import React, { Component } from "react";
import { connect } from "react-redux";
import PhoneBookEditor from "../components/PhoneBookEditor/PhoneBookEditor";
import PhoneBookFilter from "../components/PhoneBookFilter/PhoneBookFilter";
import PhoneBookList from "../components/PhoneBookList/PhoneBookList";
import contactsOperations from "../redux/contacts/contactsOperations";
import Section from "../components/Section/Section";

class ContactsPage extends Component {
  componentDidMount() {
    this.props.onFetchContacts();
  }

  render() {
    return (
      <>
        <Section title="Phonebook">
          <PhoneBookEditor />
        </Section>
        <PhoneBookFilter />
        <PhoneBookList />
      </>
    );
  }
}

const mapDispatchToProps = {
  onFetchContacts: contactsOperations.fetchContacts,
};

export default connect(null, mapDispatchToProps)(ContactsPage);

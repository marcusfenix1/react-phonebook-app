import { createAction } from "@reduxjs/toolkit";

const addContactRequest = createAction("contacts/addRequest");
const addContactSuccess = createAction("contacts/addSuccess");
const addContactError = createAction("contacts/addError");

const fetchContactsRequest = createAction("contacts/fetchRequest");
const fetchContactsSuccess = createAction("contacts/fetchSuccess");
const fetchContactsError = createAction("contacts/fetchError");

const removeContactRequest = createAction("contacts/removeRequest");
const removeContactSuccess = createAction("contacts/removeSuccess");
const removeContactError = createAction("contacts/removeError");

const changeFilter = createAction("contacts/changeFilter");

export default {
  addContactRequest,
  addContactSuccess,
  addContactError,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  removeContactRequest,
  removeContactSuccess,
  removeContactError,
  changeFilter
};

// const addСontact = createAction("contacts/add", ({ name, number }) => ({
//   payload: {
//     contact: {
//       id: uuid(),
//       name,
//       number
//     }
//   }
// }));

// const removeContact = createAction("contacts/remove");
// const changeFilter = createAction("contacts/changeFilter");

// export default {
//   addСontact,
//   removeContact,
//   changeFilter
// };

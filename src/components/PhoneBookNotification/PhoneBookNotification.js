import React from "react";
import styles from "./PhoneBookNotification.module.css";
import Alert from "@material-ui/lab/Alert";

const PhonebookNotificationError = ({ error }) => {
  return (
    <Alert variant="filled" severity="error" className={styles.notification}>
      {error}
    </Alert>
  );
};

export default PhonebookNotificationError;

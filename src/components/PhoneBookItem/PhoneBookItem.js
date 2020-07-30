import React from "react";
import { IconButton, Paper } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import styles from "./PhoneBookItem.module.css";

const PhoneBookItem = ({ name, number, onRemove }) => {
  return (
    <Paper component="li" className={styles.contactItem}>
      <p className={styles.contactTitle}>{name}</p>
      <p className={styles.contactTitle}>{number}</p>
      <IconButton aria-label="delete" onClick={onRemove}>
        <DeleteIcon />
      </IconButton>
    </Paper>
  );
};

export default PhoneBookItem;

// PhoneBookItem.propTypes = {
//   name: PropTypes.string.isRequired,
//   number: PropTypes.string.isRequired
// };

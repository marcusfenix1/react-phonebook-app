import React from "react";
// import PropTypes from "prop-types";
import { connect } from "react-redux";
import styles from "./Section.module.css";
import { CSSTransition } from "react-transition-group";
import IconButton from "@material-ui/core/IconButton";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { Paper } from "@material-ui/core";
import authOperations from "../../redux/auth/authOperations";

const Section = ({ title, children, onLogout }) => (
  <Paper className={styles.section}>
    <div className={styles.titleWrapper}>
      <CSSTransition
        in={true}
        appear={true}
        timeout={500}
        classNames={{
          appear: styles.sectionTitleAppear,
          appearActive: styles.sectionTitleAppearActive,
          enter: styles.sectionTitleEnter,
        }}
        unmountOnExit
      >
        <h2 className={styles.sectionTitle}>{title}</h2>
      </CSSTransition>
      <IconButton onClick={onLogout}>
        <ExitToAppIcon color="primary" />
      </IconButton>
    </div>
    {children}
  </Paper>
);

const mapDispatchToProps = {
  onLogout: authOperations.logOut,
};

export default connect(null, mapDispatchToProps)(Section);

// Section.propTypes = {
//   title: PropTypes.string.isRequired,
//   children: PropTypes.node,
// };

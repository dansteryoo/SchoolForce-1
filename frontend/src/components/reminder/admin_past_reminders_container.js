import { connect } from "react-redux";
import { fetchAllReminders } from "../../actions/reminder_actions";
import { fetchAllUsers } from "../../actions/user_actions.js";
import { withRouter } from "react-router-dom";
import AdminPastReminders from "./admin_past_reminders.jsx";

const mapStateToProps = state => {
  let reminders;
  if (state.entities.reminders.reminders === undefined) {
    reminders = [];
  } else {
    reminders = Object.values(state.entities.reminders.reminders);
  }

  let users;
  if (Object.values(state.entities.users).length === 0) {
    users = [];
  } else {
    users = Object.values(state.entities.users);
  }

  return {
    currentUser: state.session.user,
    reminders: reminders,
    users: users
  };
};

const mapDispatchToProps = dispatch => ({
  fetchAllReminders: () => dispatch(fetchAllReminders()),
  fetchAllUsers: () => dispatch(fetchAllUsers())
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(AdminPastReminders)
);

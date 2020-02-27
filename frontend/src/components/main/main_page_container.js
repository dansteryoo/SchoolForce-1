import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { fetchAllUsers } from "../../actions/user_actions";
import { fetchAllStudents } from "../../actions/student_actions";
import { fetchAllReminders } from "../../actions/reminder_actions";
import MainPage from './main_page.jsx';

const mapStateToProps = (state) => {
<<<<<<< HEAD
=======

>>>>>>> a7333f436f875caa56b881d4087f681f160288cc
    return {
        currentUser: state.session.user
    };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  fetchAllUsers: () => dispatch(fetchAllUsers()),
  fetchAllStudents: () => dispatch(fetchAllStudents()),
  fetchAllReminders: () => dispatch(fetchAllReminders())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainPage);
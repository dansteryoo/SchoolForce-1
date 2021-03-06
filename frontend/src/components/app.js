import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Route, Switch } from "react-router-dom";
import NavBarContainer from "./nav/navbar_container";
import MainPageContainer from "./main/main_page_container";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import AdminPastRemindersContainer from "./reminder/admin_past_reminders_container";
import ReminderFormContainer from "./search/reminder_form_container";
import ParentProfileContainer from "./user/parent_profile_container";
import Modal from '../components/modal/modal';
import About from "./nav/about";



const App = () => (
  <div id="appContainer">
    <Modal />
    <NavBarContainer  />
    <div id="body">
      <Switch>
        <Route exact path="/" component={MainPageContainer} />
        <Route exact path="/about" component={About} />
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <ProtectedRoute exact path="/profile" component={ParentProfileContainer} />
        <ProtectedRoute exact path="/draftReminder" component={ReminderFormContainer} />
        <ProtectedRoute exact path="/pastReminders" component={AdminPastRemindersContainer} />
      </Switch>
    </div>
    <footer className="main-page-footer">
      <div> Copyright &copy; 2020 SchoolForce</div>
    </footer>
  </div>
  
);

export default App;
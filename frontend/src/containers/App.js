import { connect } from "react-redux";
import App from "../pages/App";
import { logoutUser, getUser } from "../redux-store/actions/auth";

const mapStateToProps = ({ errorLoading: { isLoading, error }, user: { isAuthenticated } }) => ({
  isLoading,
  error,
  isAuthenticated
});

const mapDispatchToProps = (dispatch) => ({
  logoutUser: () => dispatch(logoutUser()),
  getUser: () => dispatch(getUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
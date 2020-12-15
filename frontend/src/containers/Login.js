import { connect } from "react-redux";
import Login from "../pages/Login";
import { loginUser } from "../redux-store/actions/auth";

const mapDispatchToProps = (dispatch) => ({
  loginUser: (data) => dispatch(loginUser(data)),
});

export default connect(null, mapDispatchToProps)(Login);

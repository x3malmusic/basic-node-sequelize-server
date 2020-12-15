import { connect } from "react-redux";
import Register from "../pages/Register";
import { registerUser } from "../redux-store/actions/auth";

const mapDispatchToProps = (dispatch) => ({
  registerUser: (data) => dispatch(registerUser(data)),
});

export default connect(null, mapDispatchToProps)(Register);

import { connect } from "react-redux";
import Main from "../pages/Main";
import { editUser, deleteUser } from "../redux-store/actions/auth";

const mapStateToProps = ({user: { email, name, lastName, userList } }) => ({
  email, name, lastName, userList
});

const mapDispatchToProps = (dispatch) => ({
  editUser: (data) => dispatch(editUser(data)),
  deleteUser: () => dispatch(deleteUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
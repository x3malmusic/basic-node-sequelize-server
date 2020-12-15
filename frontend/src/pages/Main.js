import React, { useState } from "react";
import {
  Button,
  Form,
  FormGroup,
  Input,
  ListGroup,
  ListGroupItem,
} from "reactstrap";

const Main = ({ name, lastName, email, deleteUser, editUser, userList }) => {
  const [userName, setUserName] = useState(name);
  const [userLastName, setUserLastName] = useState(lastName);

  const edit = () => {
    editUser({ name: userName, lastName: userLastName });
  };

  return (
    <div className="mx-auto vh-100 w-75 d-flex justify-content-between">
      <Form className="w-50 h-50 mt-4">
        <FormGroup>
          <h2 className="text-center">User Details</h2>
        </FormGroup>
        <FormGroup>
          <Input type="email" value={email} disabled />
        </FormGroup>
        <FormGroup>
          <Input
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Input
            value={userLastName}
            onChange={(e) => setUserLastName(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Button color="primary" className="mr-4" onClick={edit}>
            Edit User
          </Button>
          <Button color="primary" onClick={deleteUser}>
            Delete User
          </Button>
        </FormGroup>
      </Form>
      <ListGroup className="w-25 text-center mt-4">
        <h2>Users</h2>
        {userList.length &&
          userList.map((user) => <ListGroupItem key={user.id}>{user.email}</ListGroupItem>)}
      </ListGroup>
    </div>
  );
};

export default Main;

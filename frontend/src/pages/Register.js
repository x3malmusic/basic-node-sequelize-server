import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, FormGroup, Input, Button } from "reactstrap";

const Register = ({ registerUser }) => {

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");

  const register = () => {
    registerUser({ email, password, name, lastName });
  };

  return (
    <div className="vh-100 w-100 d-flex align-items-center justify-content-center">
      <Form className="w-25 h-50 mt-4">
        <FormGroup>
          <h2 className="text-center">Register</h2>
        </FormGroup>
        <FormGroup>
          <Input
            type="email"
            placeholder="Your Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Input
            placeholder="Your Name"
            onChange={(e) => setName(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Input
            placeholder="Your Last Name"
            onChange={(e) => setLastName(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Button color="primary" onClick={register} className="mr-4">
            Register
          </Button>
          <Link to="/login">Log in</Link>
        </FormGroup>
      </Form>
    </div>
  );
};

export default Register;

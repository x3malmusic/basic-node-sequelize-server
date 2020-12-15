import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, FormGroup, Input, Button } from "reactstrap";

const Login = ({ loginUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    loginUser({ email, password });
  };

  return (
    <div className="vh-100 w-100 d-flex align-items-center justify-content-center">
      <Form className="w-25 h-50 mt-4">
        <FormGroup>
          <h2 className="text-center">Login</h2>
        </FormGroup>
        <FormGroup>
          <Input
            type="email"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Button color="primary" onClick={login} className="mr-4">
            Log in
          </Button>
          <Link to="/register">Register</Link>
        </FormGroup>
      </Form>
    </div>
  );
};

export default Login;

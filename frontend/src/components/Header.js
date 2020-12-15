import React from 'react'
import { Nav, Button } from "reactstrap";


const Header = ({logout}) => {
  return (
    <Nav fill className="w-100 d-flex justify-content-between p-4 bg-success">
      <h2>Main App</h2>
      <Button color="primary" onClick={logout}>Log out</Button>
    </Nav>
  )
}

export default Header
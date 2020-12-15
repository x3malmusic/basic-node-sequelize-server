import Login from "./containers/Login";
import Register from "./containers/Register";
import Main from "./containers/Main";


export const authRoutes = [
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
]

export const appRoutes = [
  {
    path: "/",
    name: "Main",
    component: Main,
  },
]


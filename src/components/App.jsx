import Login from "pages/Login/Login";
import Layout from "./Layout/Layout";
import Contacts from "pages/Contacts/Contacts";
import Register from "pages/Register/Register";
import { Route, Routes } from "react-router-dom";

export const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="contacts" element={<Contacts />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>
  )

};
import Login from "pages/Login/Login";
import Layout from "./Layout/Layout";
import Contacts from "pages/Contacts/Contacts";
import Register from "pages/Register/Register";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./Privat Rote/Privat Rote";
import PublicRoute from "./PublicRoute/PublicRoute";

export const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/contacts" element={<PrivateRoute><Contacts /></PrivateRoute>} />
        <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
        <Route path="/register" element={<PublicRoute><Register /></PublicRoute>} />
      </Route>
    </Routes>
  )

};
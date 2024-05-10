import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import axios from "axios";
import UserPage from "./components/UserPage";
import Navbar from "./components/Navbar";

function HomePage() {
  const user = useSelector((state) => state.app);

  const isAuthenticated = user.isAuthenticated;

  if (!user.isAuthenticated) return <Navigate to="/login" />;
  else {
    return (
      <>
        <Navbar />
        <UserPage />
      </>
    );
  }
}

export default HomePage;

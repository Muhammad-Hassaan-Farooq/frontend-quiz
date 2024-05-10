import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";

import axios from "axios";
import QuestionsPage from "./components/QuestionPage";

function FAQPage() {
  const user = useSelector((state) => state.app);

  const isAuthenticated = user.isAuthenticated;

  if (!user.isAuthenticated) return <Navigate to="/login" />;
  else {
    return (
      <>
        <Navbar />
        <QuestionsPage />
      </>
    );
  }
}

export default FAQPage;

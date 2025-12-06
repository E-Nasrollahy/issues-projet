// import { lazy , Suspense } from 'react'

import Landing from "./pages/Landing";
import {  Route, Routes } from "react-router";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import IssuesDemo from "./pages/IssuesDemo";
import LoginLayout from "./components/layout/LoginLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route element={<LoginLayout />}>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Route>
      <Route path="/issues-demo" element={<IssuesDemo />} />
    </Routes>
  );
}

export default App;

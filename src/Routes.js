import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Addmission from "./components/Addmission/addmission";
import AuthContextProvider from "./Context/Authcontext";
import Courses from "./courses/Courses";
import Dashboard from "./components/Dashboard/dashboard";
import Fee from "./components/Fee/fee";
import Homepage from "./components/Homepage/Homepage";
import Login from "./components/Login/login";
import ProtectedRoute from "./components/Authcomponent/ProtectedRoute";
import React from "react";
import StudCourseDetails from "./courses/StudCourseDetails";
import StudentDetails from "./components/StudentDetail/studentdetail";
import Students from "./components/Students/students";
import StudentsList from "./courses/StudentsList";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Homepage />} />

      <Route path="/login" element={<Login />} />

      <Route
        path="dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      >
        <Route path="detail/:id" element={<StudentDetails />} />
        <Route path="admission" element={<Addmission />} />
        <Route path="students" element={<Students />} />
        <Route path="addfee" element={<Fee />} />
        <Route path="course" element={<Courses />}>
          <Route path="" element={<StudentsList />} />
          <Route path="details/:id" element={<StudCourseDetails />} />
        </Route>
      </Route>
    </>
  )
);
export default function App() {
  return (
    <div>
      <AuthContextProvider>
        <RouterProvider router={router} />
      </AuthContextProvider>
    </div>
  );
}

// export default App;

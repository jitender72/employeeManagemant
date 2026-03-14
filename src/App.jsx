import React, { useContext, useState, Activity } from "react";
import Login from "./components/Auth/Login";
import Header from "./components/otherComponents/Header";
import EmployeeDashBoard from "./components/DashBoard/EmployeeDashBoard";
import AdminDashBoard from "./components/DashBoard/AdminDashBoard";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("loggedInUser");
    return savedUser ? JSON.parse(savedUser).role : null;
  });

  // context data
  const authData = useContext(AuthContext);
  // who is loggedIn
  // useEffect(() => {
  //   if (authData) {
  //     const loggedInUser = localStorage.getItem("loggedInUser");
  //     if (loggedInUser) {
  //       setUser(loggedInUser.role);
  //     }
  //   }
  // }, [authData]);

  // handleLogin to check "email,password" match or not ?
  const handleLogin = (email, password) => {
    if (!authData) return;

    const isAdmin = authData.admin.find(
      (e) => email == e.email && password == e.password,
    );
    const isEmployees = authData.employees.find(
      (e) => email == e.email && password == e.password,
    );
    if (isAdmin) {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (isEmployees) {
      setUser("employees");
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "employee" }),
      );
    } else {
      alert("invalid credentials");
    }
  };

  // const handleLogout = () => {
  //   setUser(null);
  //   localStorage.removeItem("loggedInUser");
  // };

  return (
    <div className="bg-[#1c1c1c] h-screen">
      {/* agr user nahi hai to login dikha do otherwise kuch nahi */}

      {/* {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user === "admin" ? (
        <AdminDashBoard />
      ) : (
        <EmployeeDashBoard
          data={JSON.parse(localStorage.getItem("loggedInUser")).data}
        />
      )} */}

      {/* using Activity */}

      {/* login */}
      <Activity mode={!user ? "visible" : "hidden"}>
        <Login handleLogin={handleLogin} />
      </Activity>

      {/* admin Dashboard*/}
      <Activity mode={user === "admin" ? "visible" : "hidden"}>
        <AdminDashBoard />
      </Activity>

      {/* Employee Dashboard */}
      <Activity mode={user === "employees" ? "visible" : "hidden"}>
        <EmployeeDashBoard
          data={JSON.parse(localStorage.getItem("loggedInUser"))?.data}
        />
      </Activity>

      {/* {user == "admin" ? <AdminDashBoard /> : <EmployeeDashBoard />} */}
      {/* <EmployeeDashBoard /> */}
      {/* <AdminDashBoard /> */}
    </div>
  );
};

export default App;

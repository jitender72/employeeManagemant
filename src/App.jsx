import React, { useContext, useState, Activity, useEffect } from "react";
import Login from "./components/Auth/Login";
import Header from "./components/otherComponents/Header";
import EmployeeDashBoard from "./components/DashBoard/EmployeeDashBoard";
import AdminDashBoard from "./components/DashBoard/AdminDashBoard";
import { AuthContext } from "./context/AuthProvider";
import { setLocalStorage } from "./utils/LocalStorage";

const App = () => {
  const [user, setUser] = useState();
  const [loggedInUserData, setLoggedInUserData] = useState(null);

  // context data
  const { userData, setUserData } = useContext(AuthContext);

  useEffect(() => {
    if (!localStorage.getItem("employees")) {
      setLocalStorage();
    }
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setLoggedInUserData(userData.data);
    }
  }, []);

  // handleLogin to check "email,password" match or not ?......
  const handleLogin = (email, password) => {
    if (!userData) return;

    const isAdmin = userData.admin.find(
      (e) => email == e.email && password == e.password,
    );
    const isEmployees = userData.employees.find(
      (e) => email == e.email && password == e.password,
    );
    if (isAdmin) {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (isEmployees) {
      setUser("employee");
      setLoggedInUserData(isEmployees);
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "employee", data: isEmployees }),
      );
    } else {
      alert("invalid credentials");
    }
  };

  // handle logout to remove user from localStorage and set user to null
  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("loggedInUser");
  };

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
        <AdminDashBoard changeUser={handleLogout} />
      </Activity>

      {/* Employee Dashboard */}
      <Activity mode={user === "employee" ? "visible" : "hidden"}>
        <EmployeeDashBoard
          data={JSON.parse(localStorage.getItem("loggedInUser"))?.data}
          changeUser={handleLogout}
        />
      </Activity>

      {/* {user == "admin" ? <AdminDashBoard /> : <EmployeeDashBoard />} */}
      {/* <EmployeeDashBoard /> */}
      {/* <AdminDashBoard /> */}
    </div>
  );
};

export default App;

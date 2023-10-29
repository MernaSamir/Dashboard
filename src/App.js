import "./App.css";
import Layout from "./components/layout";

import Sidebar from "./components/sidebar";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const ComingSoon = () => <div className="soon">Coming Soon!!</div>;

  const dashboard = [
    { name: "Dashboard", component: <Dashboard />, link: "/" },
    {
      name: "Management",
      link: "/properties",
      children: [
        { name: "Properties", link: "/properties" },
        { name: "Stations", link: "/stations" },
        { name: "App Users", link: "/users" },
        { name: "Admin Roles", link: "/admin-roles" },
      ],
    },
    { name: "Statistics & Reports", link: "/reports" },
    { name: "Support Tickets", link: "/tickets" },
  ];

  return (
    <div className="App">
      <BrowserRouter>
        <Layout nodes={dashboard}>
          <div className="home">
            <div className="side">
              <Sidebar nodes={dashboard}></Sidebar>
            </div>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="*" element={<ComingSoon />} />
            </Routes>
          </div>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;

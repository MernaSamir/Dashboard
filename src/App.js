import "./App.css";
import Layout from "./components/layout";

import Sidebar from "./components/sidebar";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const CommingSoon = () => <div>Comming Soon!!</div>;


  const dashboard = [
    { name: "Dashboard", component: <Dashboard />, link:'/' },
    {
      name: "Management",
      children: [
        { name: "Properties" },
        { name: "Stations" },
        { name: "App Users" },
        { name: "Admin Roles" },
      ],
    },
    { name: "Statistics & Reports" },
    { name: "Support Tickets" },
  ];

  return (
    <div className="App">
      <BrowserRouter>
      <Layout>
        <div className="home">
          <Sidebar nodes={dashboard} ></Sidebar>
          <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/comming" element={<CommingSoon />} />

     
      </Routes>

          
          {/* <Content selectedNode={selectedNode} /> */}
        </div>
      </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;

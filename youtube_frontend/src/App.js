import React, { useState } from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import "./_app.scss";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import HomeScreen from "./Screens/HomeScreen/HomeScreen";
function App() {
  const [sidebar, toggleSidebar] = useState(false);
  const handleToggleSidebar = () => toggleSidebar((value) => !value);
  return (
    <>
      <Header handleToggleSidebar={handleToggleSidebar} />
      <div className="app__container border border-info">
        <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar} />
        <Container fluid className="app__main border border-warning">
          <HomeScreen />
        </Container>
      </div>
    </>
  );
}

export default App;

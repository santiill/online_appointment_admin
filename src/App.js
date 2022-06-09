import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Appointments from "./components/sections/appointments/Appointments";
import Chat from "./components/sections/chat/Chat";
import Chats from "./components/sections/chat/Chats";
import ClientDetail from "./components/sections/clients/ClientDetail";
import Client from "./components/sections/clients/Clients";
import Main from "./components/sections/main/Main";
import Rating from "./components/sections/settings/Settings";
import Sidebar from "./components/sidebar/Sidebar";

function Clients() {
  return (
    <div className="App">
      <div className="header">
        <Header />
      </div>
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="content">
        <Routes>
          <Route path="/*" element={<Main />} />
          <Route path="/appointment" element={<Appointments />} />
          <Route path="/clients" element={<Client />} />
          <Route path="/clientDetail" element={<ClientDetail />} />
          <Route path="/chat" element={<Chats />} />
          <Route path="/rating" element={<Rating />} />
        </Routes>
      </div>
    </div>
  );
}

export default Clients;

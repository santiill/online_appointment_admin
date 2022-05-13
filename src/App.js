import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Appointments from "./components/sections/appointments/Appointments";
import Chat from "./components/sections/chat/Chat";
import Chats from "./components/sections/chat/Chats";
import Clients from "./components/sections/clients/Clients";
import Rating from "./components/sections/rating/Rating";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
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
          <Route path="/*" element={<Appointments />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/chat" element={<Chats />} />
          <Route path="/rating" element={<Rating />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

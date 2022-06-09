import React from "react";
import AppointmentsTable from "../../base/AppointmentsTable";
import BaseTable from "../../base/AppointmentsTable";

const Appointments = () => {
  return (
    <div className="container">
      <div className="flex">
        <h3>Ближайшие записи</h3>
        <div className="flex"><input className="search_input"/>
      <button className="search_button">Search</button></div>
      
      </div>
      
      <br />
      <br />
      <AppointmentsTable/>
    </div>
  );
};

export default Appointments;

import React from "react";
import BaseTable from "../../base/AppointmentsTable";
import Table from "../../base/AppointmentsTable";
import CustomizedTables from "../../base/AppointmentsTable";
import ClientTable from "../../base/ClientTable";

const Client = () => {
  const data = [
    {name:"Акмат Акматов", number:"0555998877", date: "26.09.2021"},
    {name:"Аяна Бектемирова",number:"0998674598",date:"01.08.2019"},
    {name:"Клара Исанова", number:"0997445388", date:"12.01.2022"},
    {name:"Канат Муратов", number:"0222890967", date:"23.05.2022"},
    {name:"Руслан Кантемиров", number:"0997560019", date: "16.04.2022"},
  ];
  const headers = ["№", "ФИО", "Номер", "Дата"]
  return (
    <div className="container">
      <div className="flex">
        <h3>Пациенты</h3>
        <div className="flex"><input className="search_input"/>
      <button className="search_button">Search</button></div>
      </div>
      <br />
      <br />
      <ClientTable/>
    </div>
  );
};

export default Client;

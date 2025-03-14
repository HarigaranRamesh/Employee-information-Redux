import React from "react";
import { Provider } from "react-redux";
import store from "./Store";
import EmployeeList from "./EmployeeList";
import EmployeeForm from "./EmployeeForm";
import "./styles.css";

function App() {
  return (
    <Provider store={store}>
        <EmployeeForm />
        <EmployeeList />
    </Provider>
  );
}

export default App;

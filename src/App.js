import { Component } from "react";
import Phonebook from "./components/Phonebook";
import s from "./App.module.css";

class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  render() {
    return (
      <div className={s.container}>
        <Phonebook />
      </div>
    );
  }
}

export default App;

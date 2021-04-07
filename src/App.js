import React from "react";
import ContactList from "./ContactList";
import Feed from "./Feed";
import "./App.css";

// class component /////
class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="App-Div">
        <Feed />
        <ContactList />
      </div>
    );
  }
}

//functional component ///////

// function App() {
//   return (
//     <div className="App-Div">
//       <Feed />
//       <ContactList />
//     </div>
//   );
// }

export default App;

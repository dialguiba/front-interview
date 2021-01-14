import "./App.css";
import ListContacts from "./components/ListContacts";
import NewContact from "./components/NewContact";
import { Link, Route, Switch } from "wouter";

function App() {
  return (
    <div className="App">
      <a href="/new">New Contact</a>
      <a href="/list">List of contacts</a>
      <Switch>
        <Route component={NewContact} path="/new" />
        <Route component={ListContacts} path="/list" />
      </Switch>
    </div>
  );
}

export default App;

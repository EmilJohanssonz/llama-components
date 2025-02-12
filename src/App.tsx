import "./App.scss";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import StatusMessage from "./components/StatusMessage/StatusMessage";
import TodoList from "./components/TodoList/TodoList";
import UserCard from "./components/Usercard/UserCard";

function App() {
	    const tasks = ["Buy milk", "Learn React", "Go for a run"];


	return (
    <>
      <h1>User:</h1>
      <UserCard name="Emil" age={26} location="Borås" jobbTitle="Student" />
      <UserCard name="Sven" age={10} location="Lund" jobbTitle="Inget" />
      <UserCard name="Göran" age={30} location="Malmö" jobbTitle="Inget" />
      <p>Status Message</p>
      <StatusMessage isOnline={true} />
      <StatusMessage isOnline={false} lastSeen="2 hours ago" />
      <StatusMessage isOnline={false} lastSeen="Yesterday" />
			<p>Todo-List</p>
			<TodoList tasks={ tasks } title={ "" }  />
			<TodoList tasks={ [] } title={ "" } />
    </>
  );
}

export default App;

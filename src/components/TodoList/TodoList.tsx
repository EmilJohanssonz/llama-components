type TodoListProps = {
  tasks: string[];
  title: string;
};

const TodoList = ({ tasks,title }: TodoListProps) => {
  return (
    <div>
      <h2>Todo List</h2>
      {tasks.length > 0 ? (
        <ul>
          <p>Today's Tasks{title}</p>
          {tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      ) : (
        <p>You're all caught up! 🎉 🎉</p>
      )}
    </div>
  );
};

export default TodoList;

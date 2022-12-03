import "./App.css";
import Footer from "./components/Footer";

import TodoList from "./components/TodoList";

function App() {
  return (
    <>
      <div className="todo-app">
        <TodoList />
      </div>
      <Footer />
    </>
  );
}

export default App;

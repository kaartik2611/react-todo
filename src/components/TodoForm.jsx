const TodoForm = ({
  input,
  setInput,
  todos,
  setTodos,
  warning,
  setWarning,
}) => {
  const addTodo = (e) => {
    // console.log(e.target.value);
    setInput(e.target.value);
  };

  const newTodo = (e) => {
    e.preventDefault();
    // console.log(input);
    if (input.length === 0) {
      setWarning("Cannot add an empty Task 😅");
      setInput("");
      setTimeout(setWarning, 1500);
      return;
    }
    if (
      todos.some((todo) => input.toLowerCase() === todo.title.toLowerCase())
    ) {
      setWarning("This TODO Exists! Try Something Else 🤔");
      setInput("");
      setTimeout(setWarning, 1500);
      return;
    } else
      setTodos([
        ...todos,
        { id: Date.now(), title: input, isCompleted: false },
      ]);
    setInput("");
    setWarning("");
  };

  return (
    <div className="flex justify-center mb-4 lg:mx-48 md:mx-36 sm:mx-12 mx-10">
      <form>
        <p className="text-black p-2 m-2 text-center sm:text-xl text-base">
          {warning}
        </p>
        <input
          type="text"
          className="text-black px-2 py-1 sm:text-xl text-base focus:outline-none rounded-md border-4 border-indigo-600"
          placeholder="Add Todo"
          onChange={addTodo}
          value={input}
        />
        <button
          type="submit"
          className="sm:text-xl text-base focus:outline-none rounded-md m-2 p-1 border-4 border-indigo-600"
          onClick={newTodo}
        >
          +
        </button>
      </form>
    </div>
  );
};

export default TodoForm;

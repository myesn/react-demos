// dispatch 作为 props 被传入
let AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div>
      <input type='text' ref={(node) => (input = node)} />
      <button
        onClick={() => {
          if (!input.value) return;

          dispatch(addTodo(input.value));
          input.value = '';
        }}>
        addTodo
      </button>
    </div>
  );
};
AddTodo = connect()(AddTodo); // 注入 dispatch

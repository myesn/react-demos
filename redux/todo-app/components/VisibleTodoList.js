// 根据当前 filter 过滤需要渲染的 tods
const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case filterKind.showAll:
      return todos;
    case filterKind.showActive:
      return todos.filter((todo) => !todo.completed);
    case filterKind.showCompleted:
      return todos.filter((todo) => todo.completed);
    default:
      return todos;
  }
};

const mapStateToTodoListProps = (state) => ({
  todos: getVisibleTodos(state.todos, state.filter),
});
const mapDispatchToTodoListProps = (dispatch) => ({
  onTodoClick(id) {
    dispatch(toggleTodo(id));
  },
});
const VisibleTodoList = connect(
  mapStateToTodoListProps,
  mapDispatchToTodoListProps
)(TodoList);

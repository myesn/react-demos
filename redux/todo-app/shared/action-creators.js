// 暂且使用数字作为 todo id
let nextTodoId = 0;

const addTodo = (text) => ({
  type: actionKind.addTodo,
  payload: {
    id: nextTodoId++,
    text,
  },
});

const toggleTodo = (id) => ({
  type: actionKind.toggleTodo,
  payload: {
    id,
  },
});

const setVisibilityFilter = (filter) => ({
  type: actionKind.setVisibilityFilter,
  payload: {
    filter,
  },
});

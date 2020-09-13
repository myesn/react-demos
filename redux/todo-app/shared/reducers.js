// 不能直接修改原来的 state，而是返回一个新的 state
// ... 是 es7 的对象展开运算符，和 Object.assign({}, state, { filter: '' }) 效果相同
// 在 default 的情况下返回旧的 state，用来兼容遇到未知的 action 这样的错误

// 处理单个 todo
const todo = (todo, action) => {
  switch (action.type) {
    case actionKind.addTodo:
      const { id, text } = action.payload;

      return {
        id,
        text,
        completed: false,
      };
    case actionKind.toggleTodo:
      if (todo.id !== action.payload.id) return todo;

      return {
        ...todo,
        completed: !todo.completed,
      };
    default:
      return todo;
  }
};

// 处理 todos
const todos = (state = [], action) => {
  switch (action.type) {
    case actionKind.addTodo:
      return [...state, todo(undefined, action)];
    case actionKind.toggleTodo:
      return state.map((t) => todo(t, action));
    default:
      return state;
  }
};

// 处理 filter
const filter = (filter = filterKind.showAll, action) => {
  switch (action.type) {
    case actionKind.setVisibilityFilter:
      return action.payload.filter;
    default:
      return filter;
  }
};

// const rootReducer = (state = initialState, action) => ({
//     todos: todosReducer(state.todos, action),
//     filter: filterReducer(state.filter, action)
// });
// redux 提供了很实用的 combineReducers api，用于简化 reduer 的合并
// 并且如果 reducer 与 state 节点同名的话（即 todosReducer -> todos）还能通过 es6 的语法更进一步地简化
// const rootReducer = combineReducers({ todos, filter });
// 随着应用的膨胀，我们还可以将拆分后的 reducer 防到不同的文件中，以保持其独立性并用于专门处理不同的数据域
const rootReducer = combineReducers({ todos, filter });

// 默认初始状态
const initialState = { filter: filterKind.showAll, todos: [] };

// 展示组件
const Footer = () => (
  <p>
    Show: <FilterLink renderFilter={filterKind.showAll}>all</FilterLink>
    {', '}
    <FilterLink renderFilter={filterKind.showActive}>active</FilterLink>
    {', '}
    <FilterLink renderFilter={filterKind.showCompleted}>completed</FilterLink>
  </p>
);

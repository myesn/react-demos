const Todo = ({ text, onClick, completed }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none',
      cursor: completed ? 'default' : 'pointer',
    }}>
    {text}
  </li>
);

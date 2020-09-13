// 原本的 FilterLink 改为 Link，去掉 filter 和 renderFilter 属性，改为传入 active
const Link = ({ active, onClick, children }) => {
  if (active) return <span>{children}</span>;

  return (
    <a
      href='#'
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}>
      {children}
    </a>
  );
};

const mapStateToLinkProps = (state, ownProps) => ({
  // ownProps 是原组件 FilterLink 的 props
  // 这里是为了和高阶组件的 props 区分
  active: ownProps.renderFilter === state.filter,
});
const mapDispatchToLinkProps = (dispatch, ownProps) => ({
  onClick() {
    dispatch(setVisibilityFilter(ownProps.renderFilter));
  },
});
const FilterLink = connect(mapStateToLinkProps, mapDispatchToLinkProps)(Link);

import React, { PureComponent } from 'react';
import { SearchBar } from 'zarm';

class Searcher extends PureComponent {
  render() {
    const {
      value,
      onSubmit,
      onChange,
      onClear,
      onCancel,
      showCancel,
      clearable,
      shape,
    } = this.props;

    return (
      <SearchBar
        shape={shape}
        clearable={clearable}
        showCancel={showCancel}
        value={value}
        onSubmit={(value) => {
          onSubmit && onSubmit(value);
        }}
        onFocus={() => {
          //console.log('获取焦点');
        }}
        onChange={(value) => {
          onChange && onChange(value);
        }}
        onBlur={() => {
          //console.log('失去焦点');
        }}
        onClear={() => {
          onClear && onClear();
        }}
        onCancel={() => {
          onCancel && onCancel();
        }}
      />
    );
  }
}

Searcher.defaultProps = {
  showCancel: false,
  clearable: true,
  shape: 'round',
};

export default Searcher;

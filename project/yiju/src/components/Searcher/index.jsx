import React, { PureComponent } from 'react';
import { SearchBar } from 'zarm';

class Searcher extends PureComponent {
  render() {
    const { value, onSubmit, onChange, onClear, onCancel } = this.props;

    return (
      <SearchBar
        shape='round'
        clearable={true}
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

export default Searcher;

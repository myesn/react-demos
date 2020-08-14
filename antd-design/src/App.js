import React from 'react';

import { Button, Pagination } from 'antd';
import './App.less';

export default class App extends React.Component {
  handlePaginationChange = (page, pageSize) => {
    console.log(page, pageSize);
  };

  render() {
    return (
      <div>
        <Button type="primary">buton</Button>
        <Pagination
          defaultCurrent={1}
          total={100}
          disabled={false}
          size="default"
          showQuickJumper={true}
          onChange={this.handlePaginationChange}
        />
      </div>
    );
  }
}

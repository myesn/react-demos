import React, { Component } from 'react';

class Banner2 extends Component {
  state = {
    loading: true,
    banner: null,
  };

  componentDidMount() {
    fetch('https://api.jsonbin.io/b/5f6e07ba7243cd7e82437828', {
      headers: {
        'secret-key':
          '$2b$10$Q0sgJTHiyEB1h5k9ma0ZsuVH1dHKPMd8FnUMer.zUnJkLE6eVL.H.',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          loading: false,
          banner: data,
        });
      });
  }

  render() {
    if (this.state.loading) {
      return <div>loading..</div>;
    } else {
      return <h1>{this.state.banner[1].title}</h1>;
    }
  }
}

export default Banner2;
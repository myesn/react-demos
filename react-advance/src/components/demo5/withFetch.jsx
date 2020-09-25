import React from 'react';

const withFetch = (url) => (View) => {
  return class extends React.Component {
    state = {
      loading: true,
      data: null,
    };

    componentDidMount() {
      fetch(url, {
        headers: {
          'secret-key':
            '$2b$10$Q0sgJTHiyEB1h5k9ma0ZsuVH1dHKPMd8FnUMer.zUnJkLE6eVL.H.',
        },
      })
        .then((res) => res.json())
        .then((data) => {
          this.setState({
            loading: false,
            data: data,
          });
        });
    }

    render(){
      if(this.state.loading){
        return <div>loading..</div>;
      }

      return <View data={this.state.data}></View>
    }
  };
};


export default withFetch;
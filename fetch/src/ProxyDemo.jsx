import React from 'react';
import api from './api';

export default class ProxyDemo extends React.Component {
  componentDidMount() {
    /**
     * 开发环境下的跨域配置：
     *  https://github.com/facebook/create-react-app/blob/master/docusaurus/docs/proxying-api-requests-in-development.md
     *
     */
    // fetch('/WeatherForecast')
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //   });

    api
      .get()
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });

    api
      .post()
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }

  render() {
    return <div>proxy</div>;
  }
}

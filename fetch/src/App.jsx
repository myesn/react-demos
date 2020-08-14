import React from 'react';
import qs from 'querystring';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      banners: [],
    };
  }

  componentDidMount() {
    /**
     * https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API/Using_Fetch
     *
     * fetch 基于 es6 的 Promise
     */
    fetch('http://iwenwiki.com/api/blueberrypai/getIndexBanner.php')
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((data) => {
        console.log(data);
        this.setState({
          banners: data.banner,
        });
      });

    /**
     * post
     *
     */
    fetch('http://iwenwiki.com/api/blueberrypai/login.php', {
      method: 'post',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: qs.stringify({
        user_id: 'iwen@qq.com',
        password: 'iwen123',
        verification_code: 'crfvw',
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }

  render() {
    const { banners } = this.state;
    const bannerView =
      banners.length > 0 ? (
        <ul>
          {banners.map((banner, index) => {
            return <li key={index}>{banner.title}</li>;
          })}
        </ul>
      ) : (
        <div>数据加载中..</div>
      );
    return <div>{bannerView}</div>;
  }
}

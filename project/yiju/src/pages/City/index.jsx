import React, { PureComponent } from 'react';
import { NavBar, Icon, Button } from 'zarm';

import styles from './index.module.scss';

import api from '../../api';

function Header({ onLeftClick }) {
  return (
    <NavBar
      left={<Icon type='arrow-left' onClick={onLeftClick} />}
      title='城市选择'
    />
  );
}

function Current({ city }) {
  return <h3 className={styles.current}>当前城市：{city}</h3>;
}

function HotCity({ cities, onCityClick }) {
  const contentRender = () => {
    return cities.map((city) => (
      <div key={city.id} className={styles.box}>
        <Button
          block
          size='lg'
          onClick={(e) => onCityClick(e.target.innerText)}>
          {city.name}
        </Button>
      </div>
    ));
  };

  return (
    <>
      <div>热门城市</div>
      <div className={styles.panel}>{contentRender()}</div>
    </>
  );
}

class City extends PureComponent {
  state = {
    city: '成都',
    hotcities: [],
  };

  componentDidMount() {
    api.hotcity.data().then((res) => {
      this.setState({ hotcities: res.data });
    });
  }

  onCityClick = (city) => {
    console.log(city);
  };

  render() {
    const { history } = this.props;
    const { city, hotcities } = this.state;

    return (
      <>
        <Header
          onLeftClick={() => {
            history.goBack();
          }}
        />
        <Current city={city} />
        <HotCity cities={hotcities} onCityClick={this.onCityClick} />
      </>
    );
  }
}

export default City;

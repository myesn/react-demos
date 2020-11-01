import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { NavBar, Icon, Button } from 'zarm';

import api from '../../api';
import { update } from '../../actions/city';

import styles from './index.module.scss';

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
      <h4 className={styles.hot_city_title}>热门城市：</h4>
      <div className={styles.panel}>{contentRender()}</div>
    </>
  );
}

class City extends PureComponent {
  state = {
    hotcities: [],
  };

  componentDidMount() {
    api.hotcity.data().then((res) => {
      this.setState({ hotcities: res.data });
    });
  }

  onCityClick = (city) => {
    const { cityActions, history } = this.props;

    cityActions.update(city);
    history.push('/home');
  };

  render() {
    const { city, history } = this.props;
    const { hotcities } = this.state;

    return (
      <>
        <Header
          onLeftClick={() => {
            history.push('/home');
          }}
        />
        <Current city={city} />
        <HotCity cities={hotcities} onCityClick={this.onCityClick} />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  city: state.city,
});
const mapDispatchToProps = (dispatch) => ({
  cityActions: bindActionCreators({ update }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(City);

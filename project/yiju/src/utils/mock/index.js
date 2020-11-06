import moxios from 'moxios';
import faker from 'faker';
import { range, map } from 'ramda';

moxios.install();
faker.locale = 'zh_CN';

const domain = '/api/';

// 首页-热门数据
moxios.stubRequest(new RegExp(`${domain}hotdata.*`), {
  status: 200,
  get response() {
    return map(() => {
      return {
        id: faker.random.uuid(),
        title: faker.commerce.product(),
        img: faker.image.avatar(),
        link: faker.internet.url(),
      };
    }, range(1, 5));
  },
});

// 城市选择-热门城市
moxios.stubRequest(domain + 'hotcity', {
  status: 200,
  get response() {
    return map(() => {
      return {
        id: faker.random.uuid(),
        name: faker.address.city(),
      };
    }, range(1, 13));
  },
});

// 搜索
moxios.stubRequest(new RegExp(`${domain}search.*`), {
  status: 200,
  get response() {
    return {
      hasMore: faker.random.boolean(),
      items: map(() => {
        return {
          id: faker.random.uuid(),
          title: faker.name.title(),
          houseType: faker.random.words(),
          price: faker.commerce.price(),
          rentType: faker.random.word(),
          img:
            'https://static01.imgkr.com/temp/1f7bb3aa1c8e4f93bc33c2789a064cda.jpg', //faker.image.business(),
        };
      }, range(1, 21)),
    };
  },
});

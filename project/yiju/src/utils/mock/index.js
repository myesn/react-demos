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

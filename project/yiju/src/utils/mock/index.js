import moxios from 'moxios';
import faker from 'faker';
import { range, map } from 'ramda';

const domain = '/api/';

moxios.install();
faker.locale = 'zh_CN';

moxios.stubRequest(domain + 'hotdata', {
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

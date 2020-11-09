import moxios from 'moxios';
import faker from 'faker';
import { range, map } from 'ramda';

moxios.install();
faker.locale = 'zh_CN';

const domain = '/api/';
const avatar =
  'http://react-yiju.test.upcdn.net/assets/imgs/5c093f388cb4f012.jpg'; //faker.image.avatar()
const wallpaper = 'http://react-yiju.test.upcdn.net/assets/imgs/lakesi.jpg'; //faker.image.business()

// 首页-热门数据
moxios.stubRequest(new RegExp(`${domain}hotdata.*`), {
  status: 200,
  get response() {
    return map(() => {
      return {
        id: faker.random.uuid(),
        title: faker.commerce.product(),
        img: avatar,
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
          img: wallpaper,
        };
      }, range(1, 6)),
    };
  },
});

// 详情
moxios.stubRequest(new RegExp(`${domain}detail.*`), {
  status: 200,
  get response() {
    return {
      imgs: map(() => wallpaper, range(1, 9)),
      title: faker.name.title(),
      price: faker.commerce.price(),
      rentType: faker.random.word(),
      houseType: faker.random.words(),
      info: {
        year: faker.random.word(),
        type: faker.random.word(),
        level: faker.random.word(),
        style: faker.random.word(),
        orientation: faker.random.word(),
      },
    };
  },
});

// 评论列表数据
moxios.stubRequest(new RegExp(`${domain}comment.*`), {
  status: 200,
  get response() {
    return {
      hasMore: faker.random.boolean(),
      items: map(() => {
        return {
          id: faker.random.uuid(),
          username: faker.random.word(),
          comment: faker.random.words(),
          star: faker.random.number({
            min: 0,
            max: 5,
          }),
        };
      }, range(1, 6)),
    };
  },
});

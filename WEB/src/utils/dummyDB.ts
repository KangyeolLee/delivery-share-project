import { v4 as uuid } from 'uuid';

export const dummyReview = [
  {
    id: uuid(),
    src: '../images/profile-default.png',
    alt: 'user-default-profile-image',
    content: '맛있어요~!!!!',
    nickname: 'GGGG',
    stars: 3.0,
  },
  {
    id: uuid(),
    src: '../images/profile-default.png',
    alt: 'user-default-profile-image',
    content: '별로에요 ㅠㅠ',
    nickname: 'WWWW',
    stars: 2.5,
  },
  {
    id: uuid(),
    src: '../images/profile-default.png',
    alt: 'user-default-profile-image',
    content: '별로에요 빠르군요!~',
    nickname: 'EEE',
    stars: 4.5,
  },
  {
    id: uuid(),
    src: '../images/profile-default.png',
    alt: 'user-default-profile-image',
    content: '별로에요별로에요 맛있어요~',
    nickname: 'BVV',
    stars: 5.0,
  },
  {
    id: uuid(),
    src: '../images/profile-default.png',
    alt: 'user-default-profile-image',
    content: '별로에요 ㅠㅠ 별로에요별로에요별로에요',
    nickname: 'QQWW',
    stars: 1.5,
  },
  {
    id: uuid(),
    src: '../images/profile-default.png',
    alt: 'user-default-profile-image',
    content: '배송이 빠르군요!~',
    nickname: 'OHOH',
    stars: 4.0,
  },
  {
    id: uuid(),
    src: '../images/profile-default.png',
    alt: 'user-default-profile-image',
    content: '맛있어요~',
    nickname: 'KGLEE',
    stars: 4.0,
  },
  {
    id: uuid(),
    src: '../images/profile-default.png',
    alt: 'user-default-profile-image',
    content: '별로에요 ㅠㅠ',
    nickname: 'ac123',
    stars: 3.5,
  },
  {
    id: uuid(),
    src: '../images/profile-default.png',
    alt: 'user-default-profile-image',
    content: '배송이 빠르군요!~',
    nickname: 'OHOH',
    stars: 4.5,
  },
  {
    id: uuid(),
    src: '../images/profile-default.png',
    alt: 'user-default-profile-image',
    content: '맛있어요~',
    nickname: 'KGLEE',
    stars: 4.0,
  },
  {
    id: uuid(),
    src: '../images/profile-default.png',
    alt: 'user-default-profile-image',
    content: '별로에요 ㅠㅠ',
    nickname: 'ac123',
    stars: 3.5,
  },
  {
    id: uuid(),
    src: '../images/profile-default.png',
    alt: 'user-default-profile-image',
    content: '배송이 빠르군요!~',
    nickname: 'OHOH',
    stars: 4.5,
    comment: '리뷰 남겨주셔서 감사합니다. 더 좋은 서비스로 보답하겠습니다.',
  },
  {
    id: uuid(),
    src: '../images/profile-default.png',
    alt: 'user-default-profile-image',
    content: '맛있어요~',
    nickname: 'KGLEE',
    stars: 4.0,
    comment: '리뷰 남겨주셔서 감사합니다. 더 좋은 서비스로 보답하겠습니다.',
  },
  {
    id: uuid(),
    src: '../images/profile-default.png',
    alt: 'user-default-profile-image',
    content: '별로에요 ㅠㅠ',
    nickname: 'ac123',
    stars: 3.5,
    comment: '리뷰 남겨주셔서 감사합니다. 더 좋은 서비스로 보답하겠습니다.',
  },
  {
    id: uuid(),
    src: '../images/profile-default.png',
    alt: 'user-default-profile-image',
    content: '배송이 빠르군요!~',
    nickname: 'OHOH',
    stars: 4.5,
    comment: '리뷰 남겨주셔서 감사합니다. 더 좋은 서비스로 보답하겠습니다.',
  },
  {
    id: uuid(),
    src: '../images/profile-default.png',
    alt: 'user-default-profile-image',
    content: '최악의 최악입니다 -_-',
    nickname: 'BACK',
    stars: 1.5,
    comment: '리뷰 남겨주셔서 감사합니다. 더 좋은 서비스로 보답하겠습니다.',
  },
];

export const dummyOrder = [
  {
    id: uuid(),
    date: '2021.03.20 17:20:41',
    nickname: 'KGLEE',
    location: '서울특별시 동대문구',
    menus: [
      {
        id: uuid(),
        name: '뿌링클',
        count: 1,
      },
      {
        id: uuid(),
        name: '치즈볼(5개입)',
        count: 1,
      },
    ],
    requests: [
      {
        id: uuid(),
        nickname: 'abc',
        content: '조심히 오세요~',
      },
      {
        id: uuid(),
        nickname: 'bbb',
        content: '빨리 오세요!',
      },
    ],
    price: '55,000',
    state: 'pending',
  },
  {
    id: uuid(),
    date: '2021.03.20 15:35:11',
    nickname: 'KG123',
    location: '서울특별시 이문동',
    menus: [
      {
        id: uuid(),
        name: '뿌링클',
        count: 1,
      },
      {
        id: uuid(),
        name: '치즈볼(5개입)',
        count: 3,
      },
    ],
    requests: [
      {
        id: uuid(),
        nickname: 'abc',
        content: '대충대충 오세요~',
      },
      {
        id: uuid(),
        nickname: 'bbb',
        content: '후딱후딱 오세요!',
      },
    ],
    price: '15,000',
    state: 'delivered',
  },
  {
    id: uuid(),
    date: '2021.03.20 14:00:41',
    nickname: 'afegse',
    location: '서울특별시 휘경동',
    menus: [
      {
        id: uuid(),
        name: '호랑이치킨',
        count: 1,
      },
      {
        id: uuid(),
        name: '감자스틱(5개입)',
        count: 1,
      },
    ],
    requests: [
      {
        id: uuid(),
        nickname: 'abc',
        content: '아 제발 싸게싸게 오세요~',
      },
      {
        id: uuid(),
        nickname: 'bbb',
        content: '가나다라마바사 오세요!',
      },
    ],
    price: '5,000',
    state: 'pending',
  },
  {
    id: uuid(),
    date: '2021.03.20 13:20:51',
    nickname: 'fgggge',
    location: '서울특별시 쌍문동',
    menus: [
      {
        id: uuid(),
        name: '간장치킨',
        count: 3,
      },
      {
        id: uuid(),
        name: '치즈볼(5개입)',
        count: 1,
      },
    ],
    requests: [],
    price: '35,000',
    state: 'pending',
  },
  {
    id: uuid(),
    date: '2021.03.20 12:40:41',
    nickname: 'qwert',
    location: '서울특별시 장안동',
    menus: [
      {
        id: uuid(),
        name: '애국가치킨',
        count: 1,
      },
      {
        id: uuid(),
        name: '고구마튀김(5개입)',
        count: 1,
      },
    ],
    requests: [],
    price: '50,000',
    state: 'canceled',
  },
  {
    id: uuid(),
    date: '2021.03.20 12:20:41',
    nickname: 'hhhtt',
    location: '서울특별시 전농동',
    menus: [
      {
        id: uuid(),
        name: '범내려온다치킨',
        count: 1,
      },
      {
        id: uuid(),
        name: '새우튀김(5개입)',
        count: 1,
      },
    ],
    requests: [],
    price: '515,000',
    state: 'delivered',
  },
  {
    id: uuid(),
    date: '2021.03.20 11:20:41',
    nickname: 'afafafaf',
    location: '서울특별시 휘문동',
    menus: [
      {
        id: uuid(),
        name: '마돈나치킨',
        count: 2,
      },
      {
        id: uuid(),
        name: '치즈볼(5개입)',
        count: 2,
      },
    ],
    requests: [],
    price: '8,500',
    state: 'delivered',
  },
  {
    id: uuid(),
    date: '2021.03.20 13:20:51',
    nickname: 'fgggge',
    location: '서울특별시 쌍문동',
    menus: [
      {
        id: uuid(),
        name: '뿌링클',
        count: 1,
      },
      {
        id: uuid(),
        name: '치즈볼(5개입',
        count: 1,
      },
    ],
    requests: [],
    price: '35,000',
    state: 'pending',
  },
  {
    id: uuid(),
    date: '2021.03.20 12:40:41',
    nickname: 'qwert',
    location: '서울특별시 장안동',
    menus: [
      {
        id: uuid(),
        name: '뿌링클',
        count: 1,
      },
      {
        id: uuid(),
        name: '치즈볼(5개입',
        count: 1,
      },
    ],
    requests: [],
    price: '50,000',
    state: 'canceled',
  },
  {
    id: uuid(),
    date: '2021.03.20 12:20:41',
    nickname: 'hhhtt',
    location: '서울특별시 전농동',
    menus: [
      {
        id: uuid(),
        name: '뿌링클',
        count: 1,
      },
      {
        id: uuid(),
        name: '치즈볼(5개입',
        count: 1,
      },
    ],
    requests: [],
    price: '515,000',
    state: 'delivered',
  },
  {
    id: uuid(),
    date: '2021.03.20 11:20:41',
    nickname: 'afafafaf',
    location: '서울특별시 휘문동',
    menus: [
      {
        id: uuid(),
        name: '뿌링클',
        count: 1,
      },
      {
        id: uuid(),
        name: '치즈볼(5개입',
        count: 1,
      },
    ],
    requests: [],
    price: '8,500',
    state: 'delivered',
  },
];

export const dummyMenu = [
  {
    id: uuid(),
    src: 'https://www.yupdduk.com/images/menu/2020_hotmenuY01.png',
    alt: 'chicken1-img',
    name: '엽기떡볶이',
    category: '떡볶이',
    price: '14,000',
    desc: '맛있게 맵다. 동대문 엽기떡볶이!',
  },
  {
    id: uuid(),
    src: 'https://www.yupdduk.com/images/menu/2021_hotmenuY11.png',
    alt: 'chicken2-img',
    name: '엽기로제떡볶이',
    category: '떡볶이',
    price: '16,000',
    desc: '부드러운 크림과 엽떡의 만남!',
  },
  {
    id: uuid(),
    src:
      'https://user-images.githubusercontent.com/48883344/120107940-efac3a00-c19d-11eb-8fd4-599a4bac4a47.jpg',
    alt: 'cheeseball-img',
    name: '짜장떡볶이',
    category: '떡볶이',
    price: '15,500',
    desc: '짜릿한 춘장과 엽떡의 만남!',
  },
  {
    id: uuid(),
    src: 'https://www.yupdduk.com/images/menu/2020_hotmenuY03.png',
    alt: 'cheeseball-img',
    name: '엽기 닭볶음탕',
    category: '사이드',
    price: '24,000',
    desc: '중독적인 매운맛에 진한 국물의 감칠맛.',
  },
  {
    id: uuid(),
    src: 'https://www.yupdduk.com/images/menu/2020_hotmenuY04.png',
    alt: 'cheeseball-img',
    name: '엽기 무뼈닭발',
    category: '사이드',
    price: '15,500',
    desc: '한입에 쏙, 먹기 편한 엽기무뼈닭발!',
  },
  {
    id: uuid(),
    src: 'https://www.yupdduk.com/images/menu/2020_hotmenuY02.png',
    alt: 'cheeseball-img',
    name: '엽기 국물닭발',
    category: '사이드',
    price: '15,500',
    desc: '매콤한 국물에 당면과 떡까지 함께!',
  },
];

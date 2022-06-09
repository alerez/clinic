import { defineStore } from 'pinia'

const socials = [
  {
    path: '../../src/assets/images/header/icons/facebook.svg',
    title: 'Facebook'
  },
  {
    path: '../../src/assets/images/header/icons/instagram.svg',
    title: 'Instagram'
  },
  {
    path: '../../src/assets/images/header/icons/tiktok.svg',
    title: 'TikTok'
  },
  {
    path: '../../src/assets/images/header/icons/youtube.svg',
    title: 'Youtube'
  },
];

const navLinks = [
  {
    path: '/',
    title: 'Главная'
  },
  {
    path: '/about-us',
    title: 'O нашей косметологии'
  },
  {
    path: '/',
    title: 'Медицинское оборудование'
  },
  {
    path: '/',
    title: 'Наши процедуры'
  },
  {
    path: '/contacts',
    title: 'Контакты клиники'
  },
];

const additions = [
  {
    title: 'О нашей клинике',
    subtext: 'Клиенты Dr Beauty наслаждаются более, чем 5000 эксклюзивных процедур для лица, тела и души. Мы заботимся о вашем здоровье и молодости.',
    text: 'У нас есть решение любой эстетической проблемы — за это нас любят наши клиенты. В течение долгих лет мы радуем вас результатами. Салон красоты Dr Beauty – это место, в котором самый главный человек — это вы! Качественные услуги, стерильное оборудование и инструменты (залог безопасности Вашего здоровья). Высокий уровень сервиса и наш профессионализм являются основой нашей работы. Мы понимаем, насколько важно для Вас найти своего специалиста и доверить ему свою красоту. Индивидуальный подход позволит воплотить Ваши желания в реальность и получить желаемый результат. Мы работаем для Вас. Будем рады видеть Вас в нашем салоне. Всех наших клиентов будем рады побаловать скидками и акциями, а новеньким клиентам поможем открыть для себя незабываемую атмосферу мира эстетики и красоты.',
    img: '../../src/assets/images/addition/ad-1.png',
    button: { show: false, text: '' }
  },
  {
    title: 'Доктор Бьюти Это ведущая клиника эстетической медицины в Израиле',
    subtext: 'Название клиники появилось не случайно. Переступив порог клиники Доктор Бьюти, вы увидите по-настоящему высокопрофессиональный подход в исправлении эстетических проблем.',
    text: '',
    img: '../../src/assets/images/addition/ad-2.png',
    button: { show: true, text: 'Оформить заказ' }
  },
  {
    title: 'О нашей клинике',
    subtext: 'Наши клиенты в восторге от результатов Доктор Бьюти — клиника, которая даст ответы на все ваши вопросы.',
    text: 'Именно в клинике Доктор Бьюти мы сможем решить любую эстетическую проблему по вашему запросу. Наши сотрудники имеют колоссальный опыт работы, для них нет сложных или нерешаемых проблем. Обратитесь за бесплатной консультацией к нашим специалистам.',
    img: '../../src/assets/images/addition/ad-3.png',
    button: { show: true, text: 'Наши специалисты' }
  },
  {
    title: 'Качественные процедуры для каждого клиента',
    subtext: 'С заметными результатами уже после первой процедуры',
    text: 'Именно в клинике Доктор Бьюти мы сможем решить любую эстетическую проблему по вашему запросу. Наши сотрудники имеют колоссальный опыт работы, для них нет сложных или нерешаемых проблем. Обратитесь за бесплатной консультацией к нашим специалистам. Именно в клинике Доктор Бьюти мы сможем решить любую эстетическую проблему по вашему запросу. Наши сотрудники имеют колоссальный опыт работы, для них нет сложных или нерешаемых проблем. Обратитесь за бесплатной консультацией к нашим специалистам.',
    img: '../../src/assets/images/addition/ad-4.png',
    button: { show: false, text: '' }
  },
];

const tiles = [
  {
    img: '../../src/assets/images/procedures/pr-1.jpg',
    title: 'Удаление новообразований',
    list: [
      'Почему стоит удалить родинку в Dr Beauty',
      'Ксантелазмы век',
      'Удаление кондилом в ротовой полости',
      'Удаление бородавок',
    ]
  },
  {
    img: '../../src/assets/images/procedures/pr-1.jpg',
    title: 'Удаление новообразований',
    list: [
      'Почему стоит удалить родинку в Dr Beauty',
      'Ксантелазмы век',
      'Удаление кондилом в ротовой полости',
      'Удаление бородавок',
    ]
  },
  {
    img: '../../src/assets/images/procedures/pr-1.jpg',
    title: 'Удаление новообразований',
    list: [
      'Почему стоит удалить родинку в Dr Beauty',
      'Ксантелазмы век',
      'Удаление кондилом в ротовой полости',
      'Удаление бородавок',
    ]
  },
  {
    img: '../../src/assets/images/procedures/pr-1.jpg',
    title: 'Удаление новообразований',
    list: [
      'Почему стоит удалить родинку в Dr Beauty',
      'Ксантелазмы век',
      'Удаление кондилом в ротовой полости',
      'Удаление бородавок',
    ]
  },
  {
    img: '../../src/assets/images/procedures/pr-1.jpg',
    title: 'Удаление новообразований',
    list: [
      'Почему стоит удалить родинку в Dr Beauty',
      'Ксантелазмы век',
      'Удаление кондилом в ротовой полости',
      'Удаление бородавок',
    ]
  },
  {
    img: '../../src/assets/images/procedures/pr-1.jpg',
    title: 'Удаление новообразований',
    list: [
      'Почему стоит удалить родинку в Dr Beauty',
      'Ксантелазмы век',
      'Удаление кондилом в ротовой полости',
      'Удаление бородавок',
    ]
  },
  {
    img: '../../src/assets/images/procedures/pr-1.jpg',
    title: 'Удаление новообразований',
    list: [
      'Почему стоит удалить родинку в Dr Beauty',
      'Ксантелазмы век',
      'Удаление кондилом в ротовой полости',
      'Удаление бородавок',
    ]
  },
  {
    img: '../../src/assets/images/procedures/pr-1.jpg',
    title: 'Удаление новообразований',
    list: [
      'Почему стоит удалить родинку в Dr Beauty',
      'Ксантелазмы век',
      'Удаление кондилом в ротовой полости',
      'Удаление бородавок',
    ]
  },
  {
    img: '../../src/assets/images/procedures/pr-1.jpg',
    title: 'Удаление новообразований',
    list: [
      'Почему стоит удалить родинку в Dr Beauty',
      'Ксантелазмы век',
      'Удаление кондилом в ротовой полости',
      'Удаление бородавок',
    ]
  },
];

const benefits = [
  {
    img: '../../src/assets/images/benefits/dialog.svg',
    title: 'Говорим на 4 языках',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.'
  },
  {
    img: '../../src/assets/images/benefits/reward.svg',
    title: 'Более 10 лет опыта',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.'
  },
  {
    img: '../../src/assets/images/benefits/skincare.svg',
    title: 'Более 5000 процедур для тела и лица',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.'
  },
  {
    img: '../../src/assets/images/benefits/costumer.svg',
    title: 'Более 3000 довольно клиентов',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.'
  },
  {
    img: '../../src/assets/images/benefits/chair.svg',
    title: 'Самое соврименное оборудование',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.'
  },
  {
    img: '../../src/assets/images/benefits/location.svg',
    title: 'Клиенты по всей стране',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.'
  },
];

const specialists = [
  {
    img: '../../src/assets/images/specialists/sp-1.png',
    name: 'Анастасия',
    about: 'Наш доктор Закончила First Moscow State Medical Имеет стаж работы в Рамбам Участница международных ярмарок эстетики'
  },
  {
    img: '../../src/assets/images/specialists/sp-1.png',
    name: 'Анастасия',
    about: 'Наш доктор Закончила First Moscow State Medical Имеет стаж работы в Рамбам Участница международных ярмарок эстетики'
  },
  {
    img: '../../src/assets/images/specialists/sp-1.png',
    name: 'Анастасия',
    about: 'Наш доктор Закончила First Moscow State Medical Имеет стаж работы в Рамбам Участница международных ярмарок эстетики'
  },
];

const cabinets = [
  { img: '../../src/assets/images/cabinets/cb-1.png' },
  { img: '../../src/assets/images/cabinets/cb-1.png' },
  { img: '../../src/assets/images/cabinets/cb-3.png' },
  { img: '../../src/assets/images/cabinets/cb-4.png' },
  { img: '../../src/assets/images/cabinets/cb-5.png' },
  { img: '../../src/assets/images/cabinets/cb-6.png' },
];

const contacts = [
  {
    img: '../../src/assets/images/contacts/telephone.svg',
    title: 'Номер телефона:',
    subtitle: '052-4145005 04-8888920'
  },
  {
    img: '../../src/assets/images/contacts/location.svg',
    title: 'Мы находимся по адресу:',
    subtitle: 'Бен-Гурион 63, Кирьят-Бялик'
  },
  {
    img: '../../src/assets/images/contacts/clock.svg',
    title: 'График работы:',
    subtitle: 'Пн-Вс: с 09.00 до 20.00'
  },
];

const articles = [
  {
    img: '../../src/assets/images/articles/prev-ar-1.png',
    title: 'Название статьи',
    date: '19.05.2022',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ullamco laboris nisi ut aliquip ex ea commodo consequat ...',
    path: '/'
  },
  {
    img: '../../src/assets/images/articles/prev-ar-1.png',
    title: 'Название статьи',
    date: '19.05.2022',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ullamco laboris nisi ut aliquip ex ea commodo consequat ...',
    path: '/'
  },
  {
    img: '../../src/assets/images/articles/prev-ar-1.png',
    title: 'Название статьи',
    date: '19.05.2022',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ullamco laboris nisi ut aliquip ex ea commodo consequat ...',
    path: '/'
  },
  {
    img: '../../src/assets/images/articles/prev-ar-1.png',
    title: 'Название статьи',
    date: '19.05.2022',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ullamco laboris nisi ut aliquip ex ea commodo consequat ...',
    path: '/'
  },
  {
    img: '../../src/assets/images/articles/prev-ar-1.png',
    title: 'Название статьи',
    date: '19.05.2022',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ullamco laboris nisi ut aliquip ex ea commodo consequat ...',
    path: '/'
  },
  {
    img: '../../src/assets/images/articles/prev-ar-1.png',
    title: 'Название статьи',
    date: '19.05.2022',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ullamco laboris nisi ut aliquip ex ea commodo consequat ...',
    path: '/'
  },
  {
    img: '../../src/assets/images/articles/prev-ar-1.png',
    title: 'Название статьи',
    date: '19.05.2022',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ullamco laboris nisi ut aliquip ex ea commodo consequat ...',
    path: '/'
  },
  {
    img: '../../src/assets/images/articles/prev-ar-1.png',
    title: 'Название статьи',
    date: '19.05.2022',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ullamco laboris nisi ut aliquip ex ea commodo consequat ...',
    path: '/'
  },
  {
    img: '../../src/assets/images/articles/prev-ar-1.png',
    title: 'Название статьи',
    date: '19.05.2022',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ullamco laboris nisi ut aliquip ex ea commodo consequat ...',
    path: '/'
  },
];

export const useStore = defineStore('store', {
  state: () => ({
    socials,
    navLinks,
    additions,
    tiles,
    benefits,
    specialists,
    cabinets,
    contacts,
    articles
  }),
  getters: {},
  actions: {}
})

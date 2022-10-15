import p1 from './assets/images/Bitrix24.png'
import p2 from './assets/images/Lystshot.png'
import p3 from './assets/images/Lyndashot.png'

const data = [
  {
    id: 1,
    img: { p1 },
    link: 'https://bitrix24-website-clone.netlify.app/',
    gitlink: 'https://github.com/AnshGirdhar1/psychotic-cars-5822',
    title: 'Bitrix24 Clone',
    desc: 'Bitrix24 is an online workspace for small, medium, and large businesses.',
    tech: [
      'ReactJS',
      'Redux',
      'NodeJs',
      'Express',
      'MongoDB',
      'Mongoose',
      'Chakra-UI',
    ],
  },
  {
    id: 2,
    img: { p2 },
    link: 'https://lyst-clone.netlify.app/',
    gitlink: 'https://github.com/haresh2349/Lyst-clone',
    title: 'Lyst Clone',
    desc: 'This is a react-redux based project in which we have cloned an e-commerce shopping website named lyst.',
    tech: ['JAVASCRIPT', 'TAILWIND CSS', 'REACT JS', 'REDUX', 'MATERIAL UI'],
  },
  {
    id: 3,
    img: { p3 },
    link: 'https://projectlynda.netlify.app/',
    gitlink: 'https://github.com/haresh2349/LinkedinLearning',
    title: 'Linkedin Learning Clone',
    desc: 'LinkedIn Learning is an American online learning provider. It provides video courses taught by industry experts in software, creative, and business skills. It is a subsidiary of LinkedIn.',
    tech: ['HTML', 'CSS', 'JAVASCRIPT', 'ES6'],
  },
]

export default data

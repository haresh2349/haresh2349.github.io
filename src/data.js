import p1 from './assets/images/instagram_preview.png'
import p2 from './assets/images/Lystshot.png'
import p3 from './assets/images/Bitrix24.png'

const data = [
  {
    id: 1,
    img: { p1 },
    link: 'https://instagram-project-puce.vercel.app/',
    gitlink: 'https://github.com/haresh2349/instagram_mern_clone',
    title: 'Instagram Clone',
    desc: 'A simple, fun & creative way to capture, edit & share photos, videos & messages with friends & family.',
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
    link: 'https://bitrix24-website-clone.netlify.app/',
    gitlink: 'https://github.com/haresh2349/psychotic-cars-5822',
    title: 'Bitrix Clone',
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
]

export default data

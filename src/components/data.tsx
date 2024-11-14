import { ReactNode } from 'react'
import {
  FaDev,
  FaFacebook,
  FaFreeCodeCamp,
  FaLinkedin,
  FaStackOverflow,
  FaTwitch,
} from 'react-icons/fa'
import { FaGithub, FaSquareXTwitter, FaYoutube } from 'react-icons/fa6'
import { SiFrontendmentor } from 'react-icons/si'

export interface OptionType {
  value: string
  label: string
  imageUrl: ReactNode
}
// const options = [
//   {
//     value: 'Google',
//     label: 'Google',
//     imageUrl: '/images/frontendMentor1.svg',
//   },
//   {
//     value: 'FrontendMentor',
//     label: 'FrontendMentor',
//     imageUrl: '/images/frontendMentor1.svg',
//   },
//   {
//     value: 'FrontendMentor',
//     label: 'FrontendMentor',
//     imageUrl: '/images/frontendMentor1.svg',
//   },
//   {
//     value: 'FrontendMentor',
//     label: 'FrontendMentor',
//     imageUrl: '/images/frontendMentor1.svg',
//   },
//   {
//     value: 'FrontendMentor',
//     label: 'FrontendMentor',
//     imageUrl: '/images/frontendMentor1.svg',
//   },
//   {
//     value: 'FrontendMentor',
//     label: 'FrontendMentor',
//     imageUrl: '/images/frontendMentor1.svg',
//   },
//   {
//     value: 'FrontendMentor',
//     label: 'FrontendMentor',
//     imageUrl: '/images/frontendMentor1.svg',
//   },
// ]
const displayLinks = [
  {
    identifier: 'github',
    bgColor: '#1A1A1A',
  },
  {
    identifier: 'youtube',
    bgColor: '#EE3939',
  },
  {
    identifier: 'twitter',
    bgColor: '#43B7E9',
  },
  {
    identifier: 'frontend mentor',
    bgColor: '#fff',
  },
  {
    identifier: 'linkedin',
    bgColor: '#2D68FF',
  },
  {
    identifier: 'facebook',
    bgColor: '#2442AC',
  },
  {
    identifier: 'twitch',
    bgColor: '#EE3FC8',
  },
  {
    identifier: 'dev.to',
    bgColor: '#333333',
  },
  {
    identifier: 'freecodecamp',
    bgColor: '#302267',
  },
  {
    identifier: 'stack overflow',
    bgColor: '#EC7100',
  },
]

const options: OptionType[] = [
  {
    value: 'frontendMentor',
    label: 'Frontend Mentor',
    imageUrl: <SiFrontendmentor />,
  },
  {
    value: 'twitter',
    label: 'Twitter',
    imageUrl: <FaSquareXTwitter />,
  },
  {
    value: 'github',
    label: 'Github',
    imageUrl: <FaGithub />,
  },
  {
    value: 'linkedin',
    label: 'Linkedin',
    imageUrl: <FaLinkedin />,
  },
  {
    value: 'youtube',
    label: 'Youtube',
    imageUrl: <FaYoutube />,
  },
  {
    value: 'facebook',
    label: 'Facebook',
    imageUrl: <FaFacebook />,
  },
  {
    value: 'devTo',
    label: 'DevTo',
    imageUrl: <FaDev />,
  },
  {
    value: 'twitch',
    label: 'Twitch',
    imageUrl: <FaTwitch />,
  },
  {
    value: 'freecodecamp',
    label: 'Freecodecamp',
    imageUrl: <FaFreeCodeCamp />,
  },
  {
    value: 'stack overflow',
    label: 'Stack overflow',
    imageUrl: <FaStackOverflow />,
  },
]
export { options, displayLinks }

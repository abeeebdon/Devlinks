type ChooseUS = {
  id: number
  heading: string
  content: string
  src: string
}[]
type latest = {
  id: number
  author: string
  heading: string
  content: string
  src: string
}[]
export const whyChooseUs: ChooseUS = [
  {
    id: 1,
    heading: 'Online Banking',
    content:
      ' Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world',
    src: '/images/icon-online.svg',
  },
  {
    id: 2,
    heading: ' Simple Budgeting',
    content:
      'See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits',
    src: '/images/icon-budgeting.svg',
  },
  {
    id: 3,
    heading: '  Fast Onboarding',
    content:
      ' We don’t do branches. Open your account in minutes online and start taking control of your finances right away.',
    src: '/images/icon-onboarding.svg',
  },
  {
    id: 4,
    heading: ' Open API',
    content:
      ' Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.',
    src: '/images/icon-onboarding.svg',
  },
]

export const latestArticles: latest = [
  {
    id: 1,
    author: 'Claire Robinson',
    heading: 'Receive money in any currency with no fees',
    content:
      ' The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single',
    src: '/images/image-currency.jpg',
  },
  {
    id: 2,
    author: 'Wilson Hutton',
    heading: ' Treat yourself without worrying about money',
    content:
      '  Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you',
    src: '/images/image-restaurant.jpg',
  },
  {
    id: 3,
    author: 'Wilson Hutton',
    heading: 'Take your Easybank card wherever you go',
    content:
      ' We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you',
    src: '/images/image-plane.jpg',
  },
  {
    id: 4,
    author: 'Claire Robinson',
    heading: ' Our invite-only Beta accounts are now live!',
    content:
      ' After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...',
    src: '/images/image-confetti.jpg',
  },
]

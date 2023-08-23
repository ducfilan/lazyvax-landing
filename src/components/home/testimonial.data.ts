import type { Testimonial } from '@/interfaces/testimonial'

export const data: Array<Testimonial> = [
  {
    id: 1,
    title: 'Don’t know what to do?',
    content:
      'Lazyvax suggests personalized activities tailored to your preferences, making it a go-to app for discovering exciting experiences that align with your interests. With its intuitive interface and real-time recommendations, Lazyvax effortlessly guides you towards memorable adventures, ensuring you never have a dull moment.',
    user: {
      id: 1,
      name: 'Cuong Hoang',
      professional: 'Software Engineer Student',
      photo: '1.png',
    },
  },
  {
    id: 2,
    title: 'Lost in distractions?',
    content:
      'Lazyvax helps me regain focus and productivity by effectively preventing digital distractions. With its smart features, Lazyvax keeps me to stay on track, accomplish my goals, and create a healthier digital lifestyle.',
    user: {
      id: 1,
      name: 'Irene Yan',
      professional: 'Product Manager',
      photo: '2.png',
    },
  },
  {
    id: 3,
    title: 'No detailed plan?',
    content:
      'Lazyvax has been a game-changer for me in achieving my goals. With its AI-powered system, it effortlessly breaks down my general aspirations into detailed plans with actionable steps!',
    user: {
      id: 1,
      name: 'Rocio Lopez',
      professional: 'Accountant',
      photo: '3.png',
    },
  },
  {
    id: 4,
    title: 'Great Quality!',
    content:
      'Lazyvax stops you and reveals your undone tasks when you over-use distractions. Lazyvax keeps me motivated and organized, allowing me to make progress towards my ambitions with clarity and purpose.',
    user: {
      id: 1,
      name: 'Lona Ho',
      professional: 'Blogger',
      photo: '4.png',
    },
  },
  {
    id: 5,
    title: 'Over expectation',
    content:
      'Lazyvax tracks my schedule to calculate the remaining time, thanks to its advanced AI capabilities. This app has become an invaluable tool in helping me stay organized, motivated, and on track towards achieving my goals with greater efficiency and clarity.',
    user: {
      id: 1,
      name: 'Adam Williams',
      professional: 'Back-End Developer',
      photo: '5.png',
    },
  },
]

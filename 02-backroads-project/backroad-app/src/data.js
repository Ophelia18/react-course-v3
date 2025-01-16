import tour1 from './images/tour-1.jpeg';
import tour2 from './images/tour-2.jpeg';
import tour3 from './images/tour-3.jpeg';
import tour4 from './images/tour-4.jpeg';
export const pageLinks = [
  { id: 1, name: 'Home', url: '#home' },
  { id: 2, name: 'About', url: '#about' },
  { id: 3, name: 'Services', url: '#services' },
  { id: 4, name: 'Tours', url: '#tours' },
];

export const socialLinks = [
  { id: 1, url: 'https://www.twitter.com', icon: 'fab fa-facebook' },
  { id: 2, url: 'https://www.twitter.com', icon: 'fab fa-twitter' },
  { id: 3, url: 'https://www.twitter.com', icon: 'fab fa-squarespace' },
];

export const services = [
  {
    id: 1,
    icon: 'fas fa-map',
    title: 'location',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officiis!',
  },
  {
    id: 2,
    icon: 'fas fa-hiking',
    title: 'Hiking',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officiis!',
  },
  {
    id: 3,
    icon: 'fas fa-mountain',
    title: 'Climbing',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officiis!',
  },
];
export const tours = [
  {
    id: 1,
    image: tour1,
    date: 'august 26th, 2020',
    title: 'Tibet Adventure',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    location: 'china',
    duration: '6 days',
    price: 2100,
  },
  {
    id: 2,
    image: tour2,
    date: 'october 1th, 2020',
    title: 'best of java',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    location: 'indonesia',
    duration: '11 days',
    price: 1400,
  },
  {
    id: 3,
    image: tour3,
    date: 'september 15th, 2020',
    title: 'explore hong kong',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    location: 'hong kong',
    duration: '8 days',
    price: 5000,
  },
  {
    id: 4,
    image: tour4,
    date: 'december 5th, 2019',
    title: 'kenya highlights',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    location: 'kenya',
    duration: '20 days',
    price: 3300,
  },
];

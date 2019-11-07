import { IPizza } from '../modules/pizzas';

export default {
  listPizzas() {
    return new Promise(resolve =>
      setTimeout(() => {
        resolve(DATA);
      }, 10),
    );
  },

  getPizza(id: string) {
    return new Promise(resolve =>
      setTimeout(() => {
        resolve(DATA.find(p => p.id === id) || null);
      }, 10),
    );
  },
};

const DATA: IPizza[] = [
  {
    id: '1',
    name: 'Pizza 1',
    price: 1,
    likes: 1,
    viewerLiked: false,
  },
  {
    id: '2',
    name: 'Pizza 2',
    price: 2,
    likes: 2,
    viewerLiked: false,
  },
  {
    id: '3',
    name: 'Pizza 3',
    price: 3,
    likes: 3,
    viewerLiked: false,
  },
  {
    id: '4',
    name: 'Pizza 4',
    price: 4,
    likes: 4,
    viewerLiked: false,
  },
  {
    id: '5',
    name: 'Pizza 5',
    price: 5,
    likes: 5,
    viewerLiked: false,
  },
  {
    id: '6',
    name: 'Pizza 6',
    price: 6,
    likes: 6,
    viewerLiked: false,
  },
];

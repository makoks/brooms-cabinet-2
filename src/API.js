export const API = {
  user: async () => {
    return await {
      avatarUrl: 'https://robohash.org/reruminciduntasperiores.png?size=72x72&set=set1',
      name: 'Проданик Анастасия Александровна',
      notificationCount: 11,
    };
  },

  shop: async () => {
    return await {
      coins: 458,
      karma: 56,
      products: [
        {
          id: '1',
          imageUrl: 'https://picsum.photos/500/200?random=1',
          title: 'Толстовка Краба',
          coins: 300,
          karma: 40,
        }, {
          id: '2',
          imageUrl: 'https://picsum.photos/500/200?random=2',
          title: 'Толстовка Краба',
          coins: 300,
          karma: 80,
        }, {
          id: '3',
          imageUrl: 'https://picsum.photos/500/200?random=3',
          title: 'Толстовка Краба',
          coins: 300,
          karma: 40,
        }, {
          id: '4',
          imageUrl: 'https://picsum.photos/500/200?random=4',
          title: 'Толстовка Краба',
          coins: 300,
          karma: 40,
        }, {
          id: '5',
          imageUrl: 'https://picsum.photos/500/200?random=5',
          title: 'Толстовка Краба',
          coins: 300,
          karma: 40,
        }, {
          id: '6',
          imageUrl: 'https://picsum.photos/500/200?random=6',
          title: 'Толстовка Краба',
          coins: 300,
          karma: 40,
        }, {
          id: '7',
          imageUrl: 'https://picsum.photos/500/200?random=7',
          title: 'Толстовка Краба',
          coins: 300,
          karma: 40,
        }, {
          id: '8',
          imageUrl: 'https://picsum.photos/500/200?random=8',
          title: 'Толстовка Краба',
          coins: 300,
          karma: 40,
        },
      ],
    };
  },
};

export const API = {
	user: () => {
		return new Promise((resolve) => {
			setInterval(() => {
				resolve({
					avatarUrl:
						"https://robohash.org/reruminciduntasperiores.png?size=72x72&set=set1",
					name: "Проданик Анастасия Александровна",
					notificationCount: 11,
					projectsAndGroups: [
						{
							image: 'https://picsum.photos/40?random=1',
							title: 'Портфельные инвестиции',
							roles: ['Системный аналитик'],
							type: 'Проект',
							date: new Date('12-03-2004')
						},
						{
							image: 'https://picsum.photos/40?random=2',
							title: 'Карта развития',
							roles: ['Верстальщик', 'Проектировщик'],
							type: 'РГ',
							date: new Date('05-11-2010')
						},
						{
							image: 'https://picsum.photos/40?random=3',
							title: 'Бренд РЦР',
							roles: ['Участник рабочей группы'],
							type: 'РГ',
							date: new Date('01-01-2022')
						},
					],
					contacts: {
						email: 'test@test.ru',
						phone: '44-44',
						cabinet: '306'
					},
					notifications: [
						{
							id: '1',
							avatarUrl: 'https://picsum.photos/40?random=1',
							content: 'Задача организации, в особенности же укрепление и развитие структуры представляет собой интересный эксперимент',
							date: new Date('12-12-2022')
						},
						{
							id: '2',
							avatarUrl: 'https://picsum.photos/40?random=2',
							content: 'Значимость этих проблем настолько очевидна',
							date: new Date('02-02-2019')
						},
						{
							id: '3',
							avatarUrl: 'https://picsum.photos/40?random=3',
							content: 'Как принято считать, диаграммы связей подвергнуты целой серии независимых исследований.',
							date: new Date('03-03-2020')
						},
						{
							id: '4',
							avatarUrl: 'https://picsum.photos/40?random=4',
							content: 'Принимая во внимание показатели успешности, сложившаяся структура организации выявляет срочную потребность новых принципов формирования материально-технической и кадровой базы.',
							date: new Date('04-04-2020')
						},
						{
							id: '5',
							avatarUrl: 'https://picsum.photos/40?random=5',
							content: 'С учётом сложившейся международной обстановки, перспективное планирование способствует повышению качества своевременного выполнения сверхзадачи.',
							date: new Date('12-12-2022')
						},
						{
							id: '6',
							avatarUrl: 'https://picsum.photos/40?random=6',
							content: 'Ясность нашей позиции очевидна: сложившаяся структура организации говорит о возможностях своевременного выполнения сверхзадачи.',
							date: new Date('12-12-2022')
						},
					],
					interests: ['Плавание', 'Комиксы', 'Баскетбол', 'Кино', 'React', 'JS'],
					team: [
						{avatarUrl: 'https://picsum.photos/40?random=1', name: 'Башканков А'},
						{avatarUrl: 'https://picsum.photos/40?random=2', name: 'Колесникова О'},
						{avatarUrl: 'https://picsum.photos/40?random=3', name: 'Никитина М'},
						{avatarUrl: 'https://picsum.photos/40?random=4', name: 'Аносов А'},
						{avatarUrl: 'https://picsum.photos/40?random=5', name: 'Демидов Я'},
						{avatarUrl: 'https://picsum.photos/40?random=6', name: 'Козлова Н'},
					]
				})
			}, 2000)
		})
	},

	shop: async () => {
		return await {
			coins: 458,
			karma: 56,
			products: [
				{
					id: "1",
					imageUrl: "https://picsum.photos/500/200?random=1",
					title: "Толстовка Краба",
					coins: 300,
					karma: 40,
				},
				{
					id: "2",
					imageUrl: "https://picsum.photos/500/200?random=2",
					title: "Толстовка Краба",
					coins: 300,
					karma: 80,
				},
				{
					id: "3",
					imageUrl: "https://picsum.photos/500/200?random=3",
					title: "Толстовка Краба",
					coins: 300,
					karma: 40,
				},
				{
					id: "4",
					imageUrl: "https://picsum.photos/500/200?random=4",
					title: "Толстовка Краба",
					coins: 300,
					karma: 40,
				},
				{
					id: "5",
					imageUrl: "https://picsum.photos/500/200?random=5",
					title: "Толстовка Краба",
					coins: 300,
					karma: 40,
				},
				{
					id: "6",
					imageUrl: "https://picsum.photos/500/200?random=6",
					title: "Толстовка Краба",
					coins: 300,
					karma: 40,
				},
				{
					id: "7",
					imageUrl: "https://picsum.photos/500/200?random=7",
					title: "Толстовка Краба",
					coins: 300,
					karma: 40,
				},
				{
					id: "8",
					imageUrl: "https://picsum.photos/500/200?random=8",
					title: "Толстовка Краба",
					coins: 300,
					karma: 40,
				},
			],
		};
	},

	events: async () => {
		return await [
			{
				id: '1',
				imageUrl: "https://picsum.photos/300/160?random=1",
				title: "Alipay",
				description:
					"Nibh fringilla ut morbi amet, fusce amet nulla ut tristique.",
				publishedAt: new Date() - 60 * 60 * 1000,
				authors: [{avatarUrl: "https://picsum.photos/40?random=1"}],
			},
			{
				id: '2',
				imageUrl: "https://picsum.photos/300/160?random=2",
				title: "Alipay",
				description:
					"Nibh fringilla ut morbi amet, fusce amet nulla ut tristique.",
				publishedAt: new Date(),
				authors: [
					{avatarUrl: "https://picsum.photos/40?random=1"},
					{avatarUrl: "https://picsum.photos/40?random=2"},
					{avatarUrl: "https://picsum.photos/40?random=3"},
				],
			},
			{
				id: '3',
				imageUrl: "https://picsum.photos/300/160?random=3",
				title: "Alipay",
				description:
					"Nibh fringilla ut morbi amet, fusce amet nulla ut tristique.",
				publishedAt: new Date(),
				authors: [{avatarUrl: "https://picsum.photos/40?random=1"}],
			},
			{
				id: '4',
				imageUrl: "https://picsum.photos/300/160?random=4",
				title: "Alipay",
				description:
					"Nibh fringilla ut morbi amet, fusce amet nulla ut tristique.",
				publishedAt: new Date(),
				authors: [{avatarUrl: "https://picsum.photos/40?random=1"}],
			},
			{
				id: '5',
				imageUrl: "https://picsum.photos/300/160?random=5",
				title: "Alipay",
				description:
					"Nibh fringilla ut morbi amet, fusce amet nulla ut tristique.",
				publishedAt: new Date() - 24 * 60 * 60 * 1000,
				authors: [
					{avatarUrl: "https://picsum.photos/40?random=1"},
					{avatarUrl: "https://picsum.photos/40?random=2"},
				],
			},
			{
				id: '6',
				imageUrl: "https://picsum.photos/300/160?random=6",
				title: "Alipay",
				description:
					"Nibh fringilla ut morbi amet, fusce amet nulla ut tristique.",
				publishedAt: new Date(),
				authors: [{avatarUrl: "https://picsum.photos/40?random=1"}],
			},
			{
				id: '7',
				imageUrl: "https://picsum.photos/300/160?random=7",
				title: "Alipay",
				description:
					"Nibh fringilla ut morbi amet, fusce amet nulla ut tristique.",
				publishedAt: new Date(),
				authors: [
					{avatarUrl: "https://picsum.photos/40?random=1"},
					{avatarUrl: "https://picsum.photos/40?random=2"},
					{avatarUrl: "https://picsum.photos/40?random=3"},
					{avatarUrl: "https://picsum.photos/40?random=4"},
				],
			},
		];
	},

	news: async () => {
		return await [
			{
				id: '1',
				imageUrl: "https://picsum.photos/300/160?random=7",
				title: "New 1",
				description:
					"Nibh fringilla ut morbi amet, fusce amet nulla ut tristique.",
				publishedAt: new Date() - 60 * 60 * 1000,
				authors: [{avatarUrl: "https://picsum.photos/40?random=1"}],
			},
			{
				id: '2',
				imageUrl: "https://picsum.photos/300/160?random=6",
				title: "New 2",
				description:
					"Nibh fringilla ut morbi amet, fusce amet nulla ut tristique.",
				publishedAt: new Date(),
				authors: [
					{avatarUrl: "https://picsum.photos/40?random=1"},
					{avatarUrl: "https://picsum.photos/40?random=2"},
					{avatarUrl: "https://picsum.photos/40?random=3"},
				],
			},
			{
				id: '3',
				imageUrl: "https://picsum.photos/300/160?random=5",
				title: "New 3",
				description:
					"Nibh fringilla ut morbi amet, fusce amet nulla ut tristique.",
				publishedAt: new Date(),
				authors: [{avatarUrl: "https://picsum.photos/40?random=1"}],
			},
			{
				id: '4',
				imageUrl: "https://picsum.photos/300/160?random=4",
				title: "New 4",
				description:
					"Nibh fringilla ut morbi amet, fusce amet nulla ut tristique.",
				publishedAt: new Date(),
				authors: [{avatarUrl: "https://picsum.photos/40?random=1"}],
			},
			{
				id: '5',
				imageUrl: "https://picsum.photos/300/160?random=3",
				title: "New 5",
				description:
					"Nibh fringilla ut morbi amet, fusce amet nulla ut tristique.",
				publishedAt: new Date() - 24 * 60 * 60 * 1000,
				authors: [
					{avatarUrl: "https://picsum.photos/40?random=1"},
					{avatarUrl: "https://picsum.photos/40?random=2"},
				],
			},
			{
				id: '6',
				imageUrl: "https://picsum.photos/300/160?random=2",
				title: "New 6",
				description:
					"Nibh fringilla ut morbi amet, fusce amet nulla ut tristique.",
				publishedAt: new Date(),
				authors: [{avatarUrl: "https://picsum.photos/40?random=1"}],
			},
			{
				id: '7',
				imageUrl: "https://picsum.photos/300/160?random=1",
				title: "New 7",
				description:
					"Nibh fringilla ut morbi amet, fusce amet nulla ut tristique.",
				publishedAt: new Date(),
				authors: [
					{avatarUrl: "https://picsum.photos/40?random=1"},
					{avatarUrl: "https://picsum.photos/40?random=2"},
					{avatarUrl: "https://picsum.photos/40?random=3"},
					{avatarUrl: "https://picsum.photos/40?random=4"},
				],
			},
		];
	},

	vacations: async () => {
		return await [
			{
				userName: 'Проданик Анастасия Александровна',
				vacations: [{ start: '03.03.2022', end: '05.03.2022' }],
				department: 'Отдел аналитики',
				role: 'Системный аналитик',
				position: 'Ведущий эксперт',
				projects: [
					{ title: 'Портфельные инвестиции', tagName: 'ДСУД ПоИ' },
					{ title: 'Бренд РЦР' },
					{ title: 'Карта развития' },
				]
			}, {
				userName: 'Колесникова Оксана Олеговна',
				vacations: [
					{ start: '18.07.2022', end: '31.07.2022' },
					{ start: '07.10.2022', end: '14.10.2022' },
					{ start: '28.11.2022', end: '03.12.2022' },
				],
				department: 'Отдел разработки',
				role: 'JS разработчик',
				position: 'Ведущий эксперт',
				projects: [{ title: 'Портфельные инвестиции', tagName: 'ДСУД ПоИ' }],
			},
		];
	},
};

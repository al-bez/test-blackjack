import moment from "moment";

export const DEFAULT_PROFILE_SETTINGS = {
  activity: false,
  notification: false,
  messages: false,
};

export const DEFAULT_TODAY_HIGHEST_BET = {
  imageSrc: "images/spacemans/spaceman03.png",
  wagerType: "TODAYS HIGHEST BET",
  pricePoolBtc: "0.02 BTC",
  pricePoolMoney: null,
  startDate: "2022-05-16 13:00:00",
  endDate: moment("2022-05-18 00:00:00").unix(),
  winner: {
    avatar: "images/winners/winner01.png",
    username: "RealWinner",
    previusWinner: false,
    totalWager: null,
    prize: "+25mBTC",
  },
  wagerToday: "890 mBTC",
  wagerTop20Daily: 2234,
  wagerTop20Weekly: 8273,
};

export const DEFAULT_DAILY_WAGER = {
  imageSrc: "images/spacemans/spaceman01.png",
  wagerType: "daily wager",
  pricePoolBtc: "80mBTC",
  pricePoolMoney: "$7100",
  startDate: "2022-03-12 13:00:00",
  endDate: moment("2022-05-18 00:00:00").unix(),
  winner: null,
  wagerToday: "890 mBTC",
  wagerTop20Daily: 2234,
  wagerTop20Weekly: 8273,
  playersList: [
    {
      avatar: "images/usericons/user01.png",
      userName: "RealWinner",
      wagered: "890mBTC",
      prize: "40mBTC",
      percentage: "50%",
    },
    {
      avatar: "images/usericons/user02.png",
      userName: "deep_str",
      wagered: "890mBTC",
      prize: "40mBTC",
      percentage: "50%",
    },
    {
      avatar: "images/usericons/user02.png",
      userName: "Moora921",
      wagered: "890mBTC",
      prize: "40mBTC",
      percentage: "50%",
    },
    {
      avatar: "images/usericons/user03.png",
      userName: "Private User",
      wagered: "890mBTC",
      prize: "40mBTC",
      percentage: "50%",
    },
    {
      avatar: "images/usericons/user03.png",
      userName: "Private User",
      wagered: "890mBTC",
      prize: "40mBTC",
      percentage: "50%",
    },
  ],
};

export const DEFAULT_WEEKLY_WAGER = {
  imageSrc: "images/spacemans/spaceman02.png",
  wagerType: "weekly wager",
  pricePoolBtc: "1.75BTC",
  pricePoolMoney: "$64.500",
  startDate: "2022-03-12 13:00:00",
  endDate: moment("2022-05-23 00:00:00").unix(),
  winner: {
    avatar: "images/winners/winner01.png",
    username: "RealWinner",
    previusWinner: true,
    totalWager: "13589 mBTC",
    prize: null,
  },
  wagerToday: null,
  wagerTop20Daily: null,
  wagerTop20Weekly: null,
  playersList: [
    {
      avatar: "images/usericons/user01.png",
      userName: "RealWinner",
      wagered: "890mBTC",
      prize: "40mBTC",
      percentage: "50%",
    },
    {
      avatar: "images/usericons/user02.png",
      userName: "deep_str",
      wagered: "890mBTC",
      prize: "40mBTC",
      percentage: "50%",
    },
    {
      avatar: "images/usericons/user02.png",
      userName: "Moora921",
      wagered: "890mBTC",
      prize: "40mBTC",
      percentage: "50%",
    },
    {
      avatar: "images/usericons/user03.png",
      userName: "Private User",
      wagered: "890mBTC",
      prize: "40mBTC",
      percentage: "50%",
    },
    {
      avatar: "images/usericons/user03.png",
      userName: "Private User",
      wagered: "890mBTC",
      prize: "40mBTC",
      percentage: "50%",
    },
  ],
};

export const DEFAULT_DAILY_BIGGEST_WIN = {
  imageSrc: "images/spacemans/spaceman04.png",
  wagerType: "Daily BIGGEST WIN",
  pricePoolBtc: null,
  pricePoolMoney: null,
  startDate: "2022-03-12 13:00:00",
  endDate: moment("2022-05-18 23:59:00").unix(),
  winner: {
    avatar: "images/winners/winner01.png",
    username: "RealWinner",
    previusWinner: true,
    totalWager: "13589 mBTC",
    prize: null,
  },
  wagerToday: null,
  wagerTop20Daily: null,
  wagerTop20Weekly: null,
  playersList: [
    {
      avatar: "images/usericons/user01.png",
      userName: "RealWinner",
      wagered: "890mBTC",
      prize: "40mBTC",
      percentage: "50%",
    },
    {
      avatar: "images/usericons/user02.png",
      userName: "deep_str",
      wagered: "890mBTC",
      prize: "40mBTC",
      percentage: "50%",
    },
    {
      avatar: "images/usericons/user02.png",
      userName: "Moora921",
      wagered: "890mBTC",
      prize: "40mBTC",
      percentage: "50%",
    },
  ],
};

export const DEFAULT_HOURLY_BIGGEST_WIN = {
  imageSrc: "images/spacemans/spaceman05.png",
  wagerType: "Hourly BIGGEST WIN",
  pricePoolBtc: null,
  pricePoolMoney: null,
  startDate: "2022-03-12 13:00:00",
  endDate: moment("2022-05-18 18:59:00").unix(),
  winner: {
    avatar: "images/winners/winner01.png",
    username: "RealWinner",
    previusWinner: true,
    totalWager: "13589 mBTC",
    prize: null,
  },
  wagerToday: null,
  wagerTop20Daily: null,
  wagerTop20Weekly: null,
  playersList: [
    {
      avatar: "images/usericons/user01.png",
      userName: "RealWinner",
      wagered: "890mBTC",
      prize: "40mBTC",
      percentage: "50%",
    },
    {
      avatar: "images/usericons/user02.png",
      userName: "deep_str",
      wagered: "890mBTC",
      prize: "40mBTC",
      percentage: "50%",
    },
    {
      avatar: "images/usericons/user02.png",
      userName: "Moora921",
      wagered: "890mBTC",
      prize: "40mBTC",
      percentage: "50%",
    },
    {
      avatar: "images/usericons/user03.png",
      userName: "Private User",
      wagered: "890mBTC",
      prize: "40mBTC",
      percentage: "50%",
    },
    {
      avatar: "images/usericons/user03.png",
      userName: "Private User",
      wagered: "890mBTC",
      prize: "40mBTC",
      percentage: "50%",
    },
  ],
};

export const DEFAULT_ICONS = [
  { src: "images/currencies/currency01.png", alt: "Currency alt" },
  { src: "images/currencies/currency02.png", alt: "Currency alt" },
  { src: "images/currencies/currency03.png", alt: "Currency alt" },
  { src: "images/currencies/currency04.png", alt: "Currency alt" },
  { src: "images/currencies/currency05.png", alt: "Currency alt" },
  { src: "images/currencies/currency06.png", alt: "Currency alt" },
];

export const DEFAULT_BANNERS = [
  { src: "images/banner01.png", href: "#" },
  { src: "images/banner02.png", href: "#" },
  { src: "images/banner03.png", href: "#" },
];

export const DEFAULT_STATS = {
  statList: [
    {
      username: "RealWinner",
      status: "Win",
      game: "Blackjack.fun",
      bet: "400mBTC",
      time: "2 seconds ago",
      avatar: "images/stats/avatar.png",
    },
    {
      username: "RealWinner",
      status: "Win",
      game: "Blackjack.fun",
      bet: "400mBTC",
      time: "2 seconds ago",
      avatar: "images/stats/avatar.png",
    },
    {
      username: "RealWinner",
      status: "Win",
      game: "Blackjack.fun",
      bet: "400mBTC",
      time: "2 seconds ago",
      avatar: "images/stats/avatar.png",
    },
    {
      username: "RealWinner",
      status: "Win",
      game: "Blackjack.fun",
      bet: "400mBTC",
      time: "2 seconds ago",
      avatar: "images/stats/avatar.png",
    },
    {
      username: "RealWinner",
      status: "Win",
      game: "Blackjack.fun",
      bet: "400mBTC",
      time: "2 seconds ago",
      avatar: "images/stats/avatar.png",
    },
    {
      username: "RealWinner",
      status: "Win",
      game: "Blackjack.fun",
      bet: "400mBTC",
      time: "2 seconds ago",
      avatar: "images/stats/avatar.png",
    },
    {
      username: "RealWinner",
      status: "Win",
      game: "Blackjack.fun",
      bet: "400mBTC",
      time: "2 seconds ago",
      avatar: "images/stats/avatar.png",
    },
    {
      username: "RealWinner",
      status: "Win",
      game: "Blackjack.fun",
      bet: "400mBTC",
      time: "2 seconds ago",
      avatar: "images/stats/avatar.png",
    },
    {
      username: "RealWinner",
      status: "Win",
      game: "Blackjack.fun",
      bet: "400mBTC",
      time: "2 seconds ago",
      avatar: "images/stats/avatar.png",
    },
    {
      username: "RealWinner",
      status: "Win",
      game: "Blackjack.fun",
      bet: "400mBTC",
      time: "2 seconds ago",
      avatar: "images/stats/avatar.png",
    },
    {
      username: "RealWinner",
      status: "Win",
      game: "Blackjack.fun",
      bet: "400mBTC",
      time: "2 seconds ago",
      avatar: "images/stats/avatar.png",
    },
    {
      username: "RealWinner",
      status: "Win",
      game: "Blackjack.fun",
      bet: "400mBTC",
      time: "2 seconds ago",
      avatar: "images/stats/avatar.png",
    },
    {
      username: "RealWinner",
      status: "Win",
      game: "Blackjack.fun",
      bet: "400mBTC",
      time: "2 seconds ago",
      avatar: "images/stats/avatar.png",
    },
  ],
};

export const DEFAULT_HISTORY = {
  messages: [
    {
      avatar: "/images/chat/chat01.png",
      username: "RealWinner",
      time: "13:20",
      message: "hahta",
      premium: false,
    },
    {
      avatar: "/images/chat/chat02.png",
      username: "Ortth3rion",
      time: "13:21",
      message: "yeah 'I had only yours and gods badge",
      premium: true,
    },
    {
      avatar: "/images/chat/chat02.png",
      username: "ADMIN",
      time: "13:21",
      message:
        "Announcement. Hourly Biggest Win Competition rewards are now devided  between 10 players.",
      premium: true,
    },
    {
      avatar: "/images/chat/chat01.png",
      username: "RealWinner",
      time: "13:20",
      message: "wow",
      premium: false,
    },
    {
      avatar: "/images/chat/chat02.png",
      username: "ADMIN",
      time: "13:41",
      message:
        "Orth3rion is designing 1 notification where the nr1 is with the badge and others have just a names and reward size on the list.",
      premium: true,
    },
    {
      avatar: "/images/chat/chat03.png",
      username: "Fuzzytrukpy",
      time: "13:20",
      message: "Yay",
      premium: false,
    },
    {
      avatar: "/images/chat/chat04.png",
      username: "SweetLou",
      time: "17:25",
      message: "ooh no should of reaf chat before betting. I'm on mobile ",
      premium: false,
    },
    {
      avatar: "/images/chat/chat02.png",
      username: "Orth3rion",
      time: " 13:21",
      message: "did you bet more?",
      premium: true,
    },
  ],
};

export const DEFAULT_TOP_WINNING_GAMES = {
  listCategory: "Top winning games",
  list: [
    {
      cover: "images/games/small/small01.png",
      coverAlt: "image description",
      link: "link-to-game-1",
      description: {
        title: "Lorem Ipsum",
        devStudio: "Dolor sit amet voluptat",
        price: 120,
      },
    },
    {
      cover: "images/games/small/small02.png",
      coverAlt: "image description",
      link: "link-to-game-2",
      description: {
        title: "Lorem Ipsum",
        devStudio: "Dolor sit amet voluptat",
        price: 120,
      },
    },
  ],
};

export const DEFAULT_POPULAR_GAMES = {
  listCategory: "Popular games",
  list: [
    {
      cover: "images/games/large/large01.png",
      coverAlt: "image description",
      link: "link-to-game-1",
      description: {
        title: "Lorem Ipsum",
        devStudio: "Dolor sit amet voluptat",
        price: 120,
      },
    },
    {
      cover: "images/games/large/large02.png",
      coverAlt: "image description",
      link: "link-to-game-2",
      description: {
        title: "Lorem Ipsum",
        devStudio: "Dolor sit amet voluptat",
        price: 120,
      },
    },
    {
      cover: "images/games/large/large01.png",
      coverAlt: "image description",
      link: "link-to-game-1",
      description: {
        title: "Lorem Ipsum",
        devStudio: "Dolor sit amet voluptat",
        price: 120,
      },
    },
    {
      cover: "images/games/large/large02.png",
      coverAlt: "image description",
      link: "link-to-game-2",
      description: {
        title: "Lorem Ipsum",
        devStudio: "Dolor sit amet voluptat",
        price: 120,
      },
    },
  ],
};

export const DEFAULT_RECENTLY_PLAYED_GAMES = {
  listCategory: "Recently played games",
  list: [
    {
      cover: "images/games/small/small03.png",
      coverAlt: "image description",
      link: "link-to-game-3",
      description: {
        title: "Lorem Ipsum",
        devStudio: "Dolor sit amet voluptat",
        price: 120,
      },
    },
    {
      cover: "images/games/small/small04.png",
      coverAlt: "image description",
      link: "link-to-game-4",
      description: {
        title: "Lorem Ipsum",
        devStudio: "Dolor sit amet voluptat",
        price: 120,
      },
    },
  ],
};

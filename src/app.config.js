export default {
  pages: ['pages/index/index', 'pages/hot/index'],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
  },
  tabBar: {
    list: [
      {
        pagePath: 'pages/index/index',
        text: '最新',
      },
      {
        pagePath: 'pages/hot/index',
        text: '热门',
      },
    ],
    color: '#000',
    selectedColor: '#56abe4',
    backgroundColor: '#e4e4e4',
    borderStyle: 'white',
  },
};

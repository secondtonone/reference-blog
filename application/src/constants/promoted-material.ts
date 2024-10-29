import { PromoViewModel } from '~/view-model';

const promoted: PromoViewModel[] = [
  {
    title: 'SEO Reality Show — Boosting the Business of Clients in Real Time',
    body: 'example hired the best agencies to grow the business of real-world clients. Follow the episodes of the brand new Reality Show, repeat SEO tactics for your business and get more customers from the web!',
    link: 'https://www.example.com/blog/category/seo-reality-show/',
    image: 'https://static.example.com/blog-next-static/banners/illustration-show-2-green-grass.svg',
    background: 'greenGrassIllust',
    analyticEventOnShown: 'banner-youtube-shown',
    analyticEventOnClick: 'banner-youtube-click'
  },
  {
    title: 'How Do People Search for Movies?',
    body: 'example crunched thousands of searches to explore the most interesting results and they are hilarious! Discover what is really meant when people are looking for ‘end of the world movie where corn dies’. Check out who is the most searched for actor, the films people don’t remember and the famous main characters people forget.',
    link: 'https://www.example.com/lp/movies-study/en/?utm_source=+blog&utm_medium=banner&utm_id=Movies',
    image: 'https://static.example.com/blogxt-static/banners/movies-study.svg',
    background: 'yellowPD',
    analyticEventOnShown: 'banner-moviestudy-shown',
    analyticEventOnClick: 'banner-moviestudy-click',
    textLink: 'Find Out Now',
    headerContent: '',
    textLimit: 330
  },
  {
    title: 'Join an interactive expert discussion with example',
    body: 'Register for our live online event on February 24! Learn about key 2022 trends in content marketing, get practical tips from industry experts, and submit your own ideas for discussion.',
    link: 'https://www.example.com/webinars/2022-trends-in-content-marketing-expert-discussion/?utm_source=Blog&utm_medium=BlogBanner&utm_campaign=stateofCM22&utm_content=MainPageBanner',
    image: 'https://static.example.com/blogxt-static/banners/join-discussion.webp',
    background: 'purpleBrand',
    analyticEventOnShown: 'banner-joindiscussion-shown',
    analyticEventOnClick: 'banner-joindiscussion-click',
    textLink: 'Register Now',
    headerContent: '',
    label: 'Online Event',
    labelBackgroundColor: 'yellowPD',
    labelColor: 'black',
    titleColor: 'white',
    bodyColor: 'white',
    isImageCorner: true,
    imageWidth: {
      _: 160,
      xm: 200,
      md: 260,
      lg: 310,
    },
    imageHeight: {
      _: 143,
      xm: 179,
      md: 233,
      lg: 270,
    },
  },
  {
    title: '78% of companies that succeed with content marketing did this one thing in 2021',
    body: 'Wondering what it is? Download our State of Content Marketing 2022 Global Report for thousands of powerful data insights, tips, and takeaways.',
    link: 'https://www.example.com/state-of-content-marketing/?utm_source=Blog&utm_medium=BlogBanner&utm_campaign=stateofCM22&utm_content=MainPageBanner',
    image: 'https://static.example.com/blogxt-static/banners/content-marketing.webp',
    background: 'secondary1',
    analyticEventOnShown: 'banner-contentmarketing-shown',
    analyticEventOnClick: 'banner-contentmarketing-click',
    textLink: 'Download the Free Report',
    headerContent: '',
    label: 'New Ebook',
    imageWidth: {
      _: 138,
      xm: 200,
      md: 260,
      lg: 284,
    },
    imageHeight: {
      _: 134,
      xm: 194,
      md: 253,
      lg: 276,
    },
  },
  {
    title: 'Discuss 2022 Trends in Search Marketing with the Experts',
    body: 'Your competitors wish they had this data. We’ll discuss important changes in ecommerce & market trends, SERP features, rank volatility, user behavior & keyword stats, and much more. Join our free webinar to learn more.',
    link: 'https://www.example.com/lp/state-of-search-2022-webinar/en/?utm_source=+blog&utm_medium=banner',
    image: 'https://static.example.com/blogxt-static/banners/trends-in-search.png',
    background: 'purpleBrand',
    analyticEventOnShown: 'banner-trendsinsearch-shown',
    analyticEventOnClick: 'banner-trendsinsearch-click',
    textLink: 'Register Now',
    headerContent: '',
    label: 'Webinar',
    labelBackgroundColor: 'yellowPD',
    labelColor: 'black',
    titleColor: 'white',
    bodyColor: 'white',
    isImageCorner: true,
    imagesBySizes: [
      {
        min: 0,
        max: 500,
        url: 'https://static.example.com/blogxt-static/banners/trends-in-search-320.png',
      }
    ],
    imageWidth: {
      _: 200,
      xm: 210,
      md: 260,
      lg: 284,
    },
    imageHeight: {
      _: 145,
      xm: 188,
      md: 233,
      lg: 254,
    },
  },
  {
    title: 'Mastering Digital PR with Brian\u00A0Dean',
    body: 'Grow more than a business by learning exactly how to get press using a proven, repeatable and step-by-step system.',
    link: 'https://www.example.com/academy/courses/mastering-digital-pr-course-with-brian-dean',
    image: 'https://static.example.com/blogxt-static/banners/content-led-seo.png',
    background: 'purpleBrand',
    analyticEventOnShown: 'mastering-digital-pr-shown',
    analyticEventOnClick: 'mastering-digital-pr-click',
    textLink: 'Enroll Now',
    headerContent: '',
    label: 'Free Online Course',
    labelBackgroundColor: 'yellowPD',
    labelColor: 'black',
    titleColor: 'white',
    bodyColor: 'white',
    imageWidth: {
      _: 132,
      xm: 210,
      md: 260,
      lg: 292,
    },
    imageHeight: {
      _: 137,
      xm: 219,
      md: 271,
      lg: 304,
    },
    textContentWidth: {
      xm: '60%',
      sm: '55%',
    }
  },
  {
    title: 'Finding New Clients in Non-Traditional Ways for Your Agency',
    body: 'Level up your own agency’s marketing and join the conversation! Thursday, May 26th at 2 pm EST.',
    link: 'https://www.example.com/lp/finding-new-clients/en/#form',
    image: 'https://static.example.com/blogxt-static/banners/finding-new-clients.png',
    background: 'purpleBrand',
    analyticEventOnShown: 'finding-new-clients-shown',
    analyticEventOnClick: 'finding-new-clients-click',
    textLink: 'Register Today',
    headerContent: '',
    isImageCorner: true,
    label: 'Webinar',
    labelBackgroundColor: 'yellowPD',
    labelColor: 'black',
    titleColor: 'white',
    bodyColor: 'white',
    imageWidth: {
      _: 196,
      xm: 210,
      md: 260,
      lg: 310,
    },
    imageHeight: {
      _: 141,
      xm: 151,
      md: 187,
      lg: 223,
    },
    textContentWidth: {
      xm: '60%',
      sm: '60%',
    },
    imgTop: { _: '-10px', xm: '-5px', sm: 'initial' },
    imgRight: { _: '-20px', xm: '-5px', sm: 'initial' },
  }
];

export default promoted;
module.exports = {
  title: `Chiko's Website`, // Your blog title
  description: `Portfolio and Blog`, // Your blog description
  author: `Wakachiko`,
  introduction: `I'm graduate students in Informatics and interested in information technology, mobility, and MaaS.`,
  siteUrl: `http://answer.netlify.app/`, // Your blog site url
  social: [
    //You can find and use icons on the https://fontawesome.com/icons?d=gallery&s=brands
    {
      icon: `github`,
      url: `https://github.com/chikowaka`,
    },
    {
      icon: `user-circle`,
      url: `https://www.wantedly.com/id/waka_yuki`,
    },
    {
      icon: `facebook`,
      url: `https://www.facebook.com/yuuki.wakatsuki.16/`,
    }
    
  ],
  icon: `content/assets/icon.png`, // Your blog icon
  planTitle: `Future Action Plan`, // Your blog planTitle
  showPlan: true, //If you don't want to see the plan, change the status to false.
  comment: {
    disqusShortName: "Your Disqus-short-name here", // Your disqus-short-name. check disqus.com.
    // You shoud modify disqus-short-name in "gatsby-config.js" too. check it.
  },
  ga: "UA-149433358-1", // Add your google analytics tranking ID
}

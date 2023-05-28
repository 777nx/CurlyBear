var posts=["posts/8f3f2e3b.html","posts/5bd9b965.html","posts/9ae38eea.html","posts/4e4cffb7.html","posts/a69ae078.html","posts/6722dc87.html","posts/4bea1ff9.html","posts/1f34010f.html","posts/4f6f.html","posts/vocabulary.html","posts/listening.html","posts/speaking.html","posts/understanding.html","posts/reading.html","posts/ad4a944a.html","posts/e234fb3d.html","posts/think.html","posts/8e40d0ad.html","posts/ab2417d4.html"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};var friend_link_list=[{"name":"Hexo","hundredSuffix":"","link":"https://hexo.io/zh-tw/","avatar":"https://d33wubrfki0l68.cloudfront.net/6657ba50e702d84afb32fe846bed54fba1a77add/827ae/logo.svg","descr":"快速、简单且强大的网站框架"},{"name":"Jerry","hundredSuffix":"","link":"https://butterfly.js.org/","avatar":"https://butterfly.js.org/img/avatar.png","descr":"A Simple and Card UI Design theme for Hexo","siteshot":"https://qiniu.777nx.cn/siteshot/butterfly.js.org.jpg"},{"name":"Fantasy的技术小站","hundredSuffix":"","link":"https://www.777nx.cn/","avatar":"https://qiniu.777nx.cn/avatar.webp","descr":"记录精彩的程序人生","siteshot":"https://qiniu.777nx.cn/siteshot/www.777nx.cn.jpg"},{"name":"福苑小家","hundredSuffix":"","link":"https://blog.777nx.cn/","avatar":"https://img.777nx.cn/%E6%83%85%E5%A4%B4/%E6%83%85%E5%A4%B41.jpg","descr":"用心去记录生活吧~","siteshot":"https://qiniu.777nx.cn/siteshot/blog.777nx.cn.jpg"},{"name":"斯莱特林魔法学院","hundredSuffix":"","link":"https://vip.777nx.cn/","avatar":"https://vip.777nx.cn/wp-content/uploads/2022/10/1.jpg","descr":"斯莱特林会帮助你达成巅峰","siteshot":"https://qiniu.777nx.cn/siteshot/vip.777nx.cn.jpg"},{"name":"一日两人三餐四季","hundredSuffix":"","link":"https://blue.777nx.cn/","avatar":"https://img.777nx.cn/%E5%8F%8B%E6%83%85%E9%93%BE%E6%8E%A5/favicon.ico","descr":"时间在走，年龄在涨","siteshot":"https://qiniu.777nx.cn/siteshot/blue.777nx.cn.jpg"},{"name":"LemonWater's blog","hundredSuffix":"","link":"https://lemonovo.com/","avatar":"https://s2.loli.net/2023/03/11/GRztFjUv95M413H.jpg","descr":"加油，努力！","siteshot":"https://qiniu.777nx.cn/siteshot/lemonwater111.github.io.jpg"},{"name":"king`blog","hundredSuffix":"","link":"https://zl5241.github.io/","avatar":"https://s1.ax1x.com/2023/03/11/ppKYCkR.jpg","descr":"生活明朗，万物可胖","siteshot":"https://qiniu.777nx.cn/siteshot/zl5241.github.io.jpg"}];
    var refreshNum = 1;
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };
var posts=["posts/2829120c.html","posts/4e4cffb7.html","posts/9ae38eea.html","posts/8da2db9d.html","posts/4bea1ff9.html","posts/1f34010f.html","posts/ffde9a2a.html","posts/ad4a944a.html","posts/e6d4ba92.html","posts/a69ae078.html"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};
var posts=["posts/e234fb3d.html","posts/1f34010f.html","posts/ad4a944a.html","posts/9ae38eea.html","posts/2829120c.html","posts/a69ae078.html","posts/3bc4be07.html","posts/4e4cffb7.html","posts/4bea1ff9.html","posts/e6d4ba92.html","posts/ffde9a2a.html"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};
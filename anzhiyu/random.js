var posts=["posts/8f3f2e3b.html","posts/9ae38eea.html","posts/5bd9b965.html","posts/4e4cffb7.html","posts/4bea1ff9.html","posts/6722dc87.html","posts/4f6f.html","posts/a69ae078.html","posts/1f34010f.html","posts/vocabulary.html","posts/speaking.html","posts/listening.html","posts/understanding.html","posts/reading.html","posts/ad4a944a.html","posts/e234fb3d.html","posts/8e40d0ad.html","posts/ab2417d4.html"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};
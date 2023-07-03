# Please see original repo https://github.com/mayeaux/nodetube


# Nodetube structure

```
routes.js => define the route

views/    => display the template
views/media.pug => the display template for image
partials/ => headers, footers, etc.

```



```
// routes.js
const publicController = require('./controllers/frontend/public');

// get request
app.get('/privacy', publicController.privacy);
```

```
// ./controllers/frontend/public.js
// expose privacy by rendering the template privacy.pu
exports.privacy = async(req, res) => {
  
  res.send('public/privacy');
};
```

# Nodetube
original repo https://github.com/mayeaux/nodetube
changes: for personal use, I removed the abilities of sign up, comments, and hide the login interface

# how to run
adjust .env.setting and .env.private accordingly

docker compose build
docker compose up 2>&1 | grep -v 'nodetube-mongo'

http://127.0.0.1:49161/signup

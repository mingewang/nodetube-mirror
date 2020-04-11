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
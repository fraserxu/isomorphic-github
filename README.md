isomorphic github
=================

An example to test isomorphic application with `react` + `flux` + `react-router` + `dispatcher` + `express`

I've been using `react` + `flux` in the pure client side for a while, but there are a few problem with this approach:

* Browser compability
* SEO
* First time page open speed
* Code reuse

The goal of this project is to test the idea of a truly isomorphic application architecture, and to be able to fix the problem I have above:

* **Browser compability** - Since the code could be rendered in the back-end, for browser that doesn't support JavaScript well, the user could still see the page;
* **SEO** - The app is a fully working page, so the search engine could easily grab it;
* **First time open speed** - I've been building a lot of restful api based single page application, it's good to split the logic from the server and client, but sometimes the client is doing too much work at the same time, the browser has to load all the html, css and script, and then render it, so it could be a bad user experience when there's a lot of data coming, the benefit of this approach is that the server will share part of the responsiblity;
* **Code resuse** As your code is written for both client and server, most of the code could be reused;

**Tools I use:**

* React - View layer
* Flux - data flow
* Dispatcher - isomorphic dispathcer
* react-router - router
* express - server
* express-state - share state to client in the back-end
* superagent - xhr library

**Build tools for dev:**

* react-hot-loader
* webpack

#### License

MIT

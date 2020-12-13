// https://medium.com/@mdp/csp-in-express-js-node-157d040f2f00
let sources = {
  'default-src': ['\'self\''],
  'script-src': ['\'self\'', 'https://*.myexternalcdn.com'],
  'frame-src': ['https://someexternalframesource.com'],
  'img-src': ['\'self\'', 'https:', 'data:'],
  'style-src': ['\'self\'', 'https:'],
  'font-src': ['\'self\'', 'https:'],
  'connect-src': ['\'self\''],
};

let csp = Object.keys(sources).map(function (key) {
  return `${key} ${sources[key].join(' ')};`
});

const cspMiddleware = function (request, response, next) {
  request.setHeader('Content-Security-Policy', csp.join(' '))
  next()
};

export default cspMiddleware;
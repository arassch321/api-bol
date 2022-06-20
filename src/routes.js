const {
  getAdatHandler,

} = require('./handler');

const routes = [
  {
    method: 'GET',
    path: '/adat',
    handler: getAdatHandler,
  },

];

module.exports = routes;

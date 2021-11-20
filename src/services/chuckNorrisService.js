import { httpService } from './httpService';




async function getCategories() {
  return ['bla', 'yyy', 'ddd', 'ggg'];
  //return await httpService.get(`/categories`);
}

async function getFact(name, category) {
  let queryParams = '';
  if (name) queryParams = `?name=${name}`;
  if (category) {
    if (name) queryParams += `&category=${category}`;
    else queryParams = `?category=${category}`;
  }
  /* return {
    "categories": ["dev"],
    "created_at": "2019-06-02 08:47:39.43184",
    "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
    "id": "bwoz2uwsqnwmyawyxdvo1w",
    "updated_at": "2019-06-02 08:47:39.43184",
    "url": "https://api.chucknorris.io/jokes/bwoz2uwsqnwmyawyxdvo1w",
    "value": "Chuck Norris finished World of Warcraft."
  }; */
  console.log(`/random${queryParams}`);
  //return await httpService.get(`/random${queryParams}`);
}

async function getFacts(keyWords) {
  console.log(`/search?query=${keyWords}`)
  //return await httpService.get(`/search?query=${keyWords}`);
  return [
    {
      "categories": ["dev"],
      "created_at": "2022-06-02 08:47:39.43184",
      "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
      "id": "bwoz2uwsqnwmyawyxdvo551w",
      "updated_at": "2019-06-02 08:47:39.43184",
      "url": "https://api.chucknorris.io/jokes/bwoz2uwsqnwmyawyxdvo1w",
      "value": "Chuck gfdgdfgdfsgd"
    },
    {
      "categories": ["dev"],
      "created_at": "2011-01-02 08:47:39.43184",
      "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
      "id": "bwoz2uwsqnwmyawyx55dvo1w",
      "updated_at": "2019-06-02 08:47:39.43184",
      "url": "https://api.chucknorris.io/jokes/bwoz2uwsqnwmyawyxdvo1w",
      "value": "Chuck Norris 1"
    },
    {
      "categories": ["dev"],
      "created_at": "2020-06-02 08:40:39.43184",
      "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
      "id": "bwoz2uwsqnwmy66awyxdvo1w",
      "updated_at": "2019-06-02 06:47:39.43184",
      "url": "https://api.chucknorris.io/jokes/bwoz2uwsqnwmyawyxdvo1w",
      "value": "Chuck Norris finished 99999."
    },
    {
      "categories": ["dev"],
      "created_at": "2018-06-01 08:47:39.43184",
      "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
      "id": "bwoz2uwsqnwm45yawyxdvo1w",
      "updated_at": "2019-06-02 08:47:39.43184",
      "url": "https://api.chucknorris.io/jokes/bwoz2uwsqnwmyawyxdvo1w",
      "value": "Chuck Norris finished World 666666"
    },
    {
      "categories": ["dev"],
      "created_at": "2019-05-02 08:47:39.43184",
      "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
      "id": "bwoz2uws5454qnwmyawyxdvo1w",
      "updated_at": "2020-06-02 08:47:39.43184",
      "url": "https://api.chucknorris.io/jokes/bwoz2uwsqnwmyawyxdvo1w",
      "value": "Chuck Norris bl bla 5555"
    },
  ]
}




export const chuckNorrisService = {
  getCategories,
  getFact,
  getFacts
}
const heroURL =
  " http://www.flickr.com/services/api";

const getHeroes = () => {
  return fetch(heroURL);
};



const getHeroById = id => {};

export { getHeroes, getHeroById};
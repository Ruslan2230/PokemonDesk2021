import getUrlWithParamConfig from './getUrlWithParamConfig';

describe('getUrlWithParamConfig', () => {
  test('должна принимать 2 аргумента "getPokemons" и пустой обьукт , на выходе получать обьект с полями pathname,protocol,host и пустым query', () => {
    const url = getUrlWithParamConfig('getPokemons', {});

    expect(url).toEqual({
      protocol: 'http',
      host: 'zar.hosthot.ru',
      pathname: '/api/v1/pokemons',
      query: {},
    });
  });

  test('должна принимать 2 аргумента "getPokemon" и {id: 25} , на выходе получать обьект с полями pathname,protocol,host и пустой  query ', () => {
    const url = getUrlWithParamConfig('getPokemon', { id: 25 });

    expect(url).toEqual({
      protocol: 'http',
      host: 'zar.hosthot.ru',
      pathname: '/api/v1/pokemon/25',
      query: {},
    });
  });
});

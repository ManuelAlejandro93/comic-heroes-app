import { heroesData } from '../../../HeroeApp/Data/HeroeData';

describe('Pruebas en HeroesData', () => {
  test('Debe ser del tipo esperado', () => {
    expect(heroesData[0]).toStrictEqual({
      id: expect.any(String),
      superhero: expect.any(String),
      publisher: expect.any(String),
      alter_ego: expect.any(String),
      first_appearance: expect.any(String),
      characters: expect.any(Array)
    });
  });
});

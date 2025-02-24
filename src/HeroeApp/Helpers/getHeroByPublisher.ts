import { Heroe, heroesData } from '@/HeroeApp';
export const getHeroByPublisher = (publisher: string): Heroe[] | Error => {
  if (publisher === 'DC Comics' || publisher === 'Marvel Comics') {
    return heroesData.filter((hero) => hero.publisher === publisher);
  } else {
    throw new Error('Publisher Incorrecto.');
  }
};

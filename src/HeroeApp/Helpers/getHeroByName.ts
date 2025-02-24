import { heroesData, Heroe } from '@/HeroeApp';

export const getHeroByName = (searchedHeroName: string): Heroe[] => {
  return heroesData.filter((hero) =>
    hero.superhero.toLowerCase().includes(searchedHeroName.toLowerCase())
  );
};

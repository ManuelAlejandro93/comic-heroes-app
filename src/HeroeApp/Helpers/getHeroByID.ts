import { Heroe, heroesData } from '@/HeroeApp';
export const getHeroByID = (heroID: string): Heroe | 'Hero-Not-Found' => {
  let response = heroesData.find((hero) => hero.id === heroID);
  if (!response) {
    return 'Hero-Not-Found';
  } else {
    return response;
  }
};

import { useMemo } from 'react';
import { getHeroByPublisher, HeroCard, Heroe } from '@/HeroeApp';

interface Props {
  publisher: 'DC Comics' | 'Marvel Comics';
}

interface Props {
  publisher: 'DC Comics' | 'Marvel Comics';
}

export const HeroGrid = ({ publisher }: Props) => {
  const heroes: Heroe[] = useMemo(() => {
    return getHeroByPublisher(publisher) as Heroe[];
  }, [publisher]);

  return (
    <div className='grid grid-cols-3 w-full pr-16 gap-8'>
      {heroes.map((hero) => (
        <HeroCard
          key={hero.id}
          {...hero}
        ></HeroCard>
      ))}
    </div>
  );
};

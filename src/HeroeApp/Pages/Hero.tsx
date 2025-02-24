import { useParams, Navigate } from 'react-router-dom';
import { getHeroByID, Heroe, HeroFullPageView } from '@/HeroeApp';
import { useMemo } from 'react';

type HeroRespose = Heroe | 'Hero-Not-Found';

export const HeroPage = () => {
  const { heroID } = useParams();

  const heroResponse: HeroRespose = useMemo(() => {
    return getHeroByID(heroID as string);
  }, [heroID]);

  if (heroResponse === 'Hero-Not-Found') {
    return <Navigate to={'/'} />;
  }

  return (
    <div className='text-center py-8 pr-16'>
      <HeroFullPageView {...heroResponse} />
    </div>
  );
};

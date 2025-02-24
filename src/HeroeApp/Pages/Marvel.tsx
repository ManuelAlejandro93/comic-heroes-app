import { HeroGrid } from '@/HeroeApp';

export const MarvelPage = () => {
  return (
    <>
      <div className='text-center'>
        <h1 className='text-6xl text-white mb-6'>Marvel Heroes</h1>
        <HeroGrid publisher='Marvel Comics' />
      </div>
    </>
  );
};

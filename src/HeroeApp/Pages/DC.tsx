import { HeroGrid } from '@/HeroeApp';

export const DCPage = () => {
  return (
    <div className='text-center'>
      <h1 className='text-6xl text-white mb-6'>DC Heroes</h1>
      <HeroGrid publisher='DC Comics' />
    </div>
  );
};

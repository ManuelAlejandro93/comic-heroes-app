import { Button } from '@/shadcn/ui/button';
import { Input } from '@/shadcn/ui/input';
import { Label } from '@radix-ui/react-label';
import { useState } from 'react';

import { Link } from 'react-router-dom';

import { getHeroByName, Heroe } from '@/HeroeApp';

export const SearchPage = () => {
  const [heroeSearch, setHeroeSearch] = useState<string>('');
  const [foundHeroes, setFoundHeroes] = useState<Heroe[]>([
    '' as unknown as Heroe
  ]);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setHeroeSearch(e.target.value);
  };
  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFoundHeroes(getHeroByName(heroeSearch));
  };

  return (
    <div className='text-center pr-16'>
      <h1 className='text-6xl text-white'>Welcome to Search page</h1>
      <form
        className='grid place-items-center pt-16'
        onSubmit={handleOnSubmit}
      >
        <Label
          htmlFor='hero-search'
          className='text-2xl rounded-xl  bg-slate-200 hover:bg-slate-300 mb-2 w-1/2 hover:cursor-pointer'
        >
          Search your Heroes by their name.
        </Label>
        <Input
          type='text'
          name='hero_search'
          className='text-black text-3xl w-1/2 border-2 border-solid border-black mb-2'
          value={heroeSearch}
          onChange={handleOnChange}
          id='hero-search'
          placeholder='Batman...'
          min={2}
        />
        <Button type='submit'>Search Hero</Button>
      </form>

      <div className='mt-8'>
        <h2 className='text-3xl text-white'>Resultados</h2>

        {foundHeroes.length >= 1 ? (
          <ul className='grid grid-cols-3'>
            {foundHeroes.map((hero, i) => (
              <Link
                key={`${hero.id}_${i}`}
                to={`/hero/${hero.id}`}
                className='text-2xl hover:text-blue-500 hover:underline'
              >
                {hero.superhero}
              </Link>
            ))}
          </ul>
        ) : (
          <p>Hero Not Found</p>
        )}
      </div>
    </div>
  );
};

import { Button } from '@/shadcn/ui/button';
import { Input } from '@/shadcn/ui/input';
import { Label } from '@radix-ui/react-label';
import { useEffect, useState } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { Heroe } from '../interfaces';
import { getHeroByName } from '../Helpers';
import queryString from 'query-string';

export const SearchQueryParamsPage = () => {
  const { search } = useLocation();
  const [heroeSearch, setHeroeSearch] = useState<string>('');
  const [foundHeroes, setFoundHeroes] = useState<Heroe[]>([]);
  const [searchParams] = useState<string>(search);

  useEffect(() => {
    if (searchParams.length > 1) {
      const heronameQuery = queryString.parse(searchParams)['heroname'];
      setFoundHeroes(getHeroByName(heronameQuery as string));
    }
  }, [searchParams]);

  const navigate = useNavigate();

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setHeroeSearch(e.target.value);
  };
  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`?heroname=${heroeSearch}`);
    setFoundHeroes(getHeroByName(heroeSearch));
  };

  return (
    <div className='text-center pr-16'>
      <h1 className='text-6xl text-white'>
        Welcome to Search page with query params
      </h1>
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
          className='text-black text-3xl w-1/2 border-2 border-solid border-black mb-2'
          id='hero-search'
          placeholder='Batman...'
          min={2}
          value={heroeSearch}
          onChange={handleOnChange}
        />
        <Button type='submit'>Search Hero</Button>
      </form>

      <div className='mt-8'>
        <h2 className='text-3xl text-white'>
          Hero result with: <span className='text-red-400'>{heroeSearch}</span>
        </h2>
        {foundHeroes.length >= 1 ? (
          <ul className='grid grid-cols-3'>
            {foundHeroes.map((hero, i) => (
              <span key={`${hero.id}_${i}`}>
                <Link
                  to={`/hero/${hero.id}`}
                  className='text-2xl hover:text-blue-500 hover:underline'
                >
                  {hero.superhero}
                </Link>
              </span>
            ))}
          </ul>
        ) : (
          <p>No results</p>
        )}
      </div>
    </div>
  );
};

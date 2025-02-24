import { useNavigate } from 'react-router-dom';

import { cn } from '@/shadcn/lib/utils';
import { Button } from '@/shadcn/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle
} from '@/shadcn/ui/card';
import { UserRoundSearch } from 'lucide-react';
import { Heroe } from '@/HeroeApp';

type CardProps = React.ComponentProps<typeof Card>;

type Props = CardProps & Heroe;

export function HeroFullPageView({
  className,
  alter_ego,
  characters,
  first_appearance,
  id,
  publisher,
  superhero,
  ...props
}: Props) {
  const navigate = useNavigate();
  return (
    <Card
      className={cn('pt-10 animate-fade-right animate-once', className)}
      {...props}
    >
      <CardContent>
        <div className='grid grid-cols-2 border p-3 rounded-xl shadow-lg'>
          <img
            src={`../../../assests/heroes/${id}.jpg`}
            alt='hero-name'
            className='rounded-xl shadow-lg'
          />
          <div className='grid'>
            <span className='flex h-2 w-full rounded-full bg-sky-500' />
            <CardDescription className='text-xl'>A.K.A:</CardDescription>
            <CardTitle className='text-2xl'>{superhero}</CardTitle>

            <span className='flex h-2 w-full rounded-full bg-sky-500' />
            <CardDescription className='text-xl'>Real name:</CardDescription>
            <CardTitle className='text-2xl'>{alter_ego}</CardTitle>

            <span className='flex h-2 w-full rounded-full bg-sky-500' />
            <CardDescription className='text-xl'>
              First Appearance:
            </CardDescription>
            <CardTitle className='text-2xl'>{first_appearance}</CardTitle>

            <span className='flex h-2 w-full rounded-full bg-sky-500' />
            <CardDescription className='text-xl'>
              Publisher (Owner):
            </CardDescription>
            <CardTitle className='text-2xl'>{publisher}</CardTitle>

            <span className='flex h-2 w-full rounded-full bg-sky-500' />
            <CardDescription className='text-xl'>API ID:</CardDescription>
            <CardTitle className='text-2xl'>{id}</CardTitle>
            <span className='flex h-2 w-full rounded-full bg-sky-500' />
            <CardDescription className='text-xl'>
              Also plays as:
            </CardDescription>
            {characters.map((character) => (
              <CardTitle
                key={`${id}_${alter_ego}`}
                className='text-2xl'
              >
                {character}
              </CardTitle>
            ))}

            <span className='flex h-2 w-full rounded-full bg-sky-500' />
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button
          className='w-full'
          onClick={() => {
            navigate(-1);
          }}
        >
          <UserRoundSearch></UserRoundSearch>Ver lista de Héroes
        </Button>
      </CardFooter>
    </Card>
  );
}

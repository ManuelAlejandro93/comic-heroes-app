import { useNavigate } from 'react-router-dom';

import { cn } from '@/shadcn/lib/utils';
import { Button } from '@/shadcn/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/shadcn/ui/card';
import { UserRoundSearch } from 'lucide-react';
import { Heroe } from '@/HeroeApp';

type CardProps = React.ComponentProps<typeof Card>;

type Props = CardProps & Heroe;

export function HeroCard({
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
      className={cn(
        'pt-4 animate-fade-down animate-duration-500 animate-delay-200 animate-ease-in-out',
        className
      )}
      {...props}
    >
      <CardHeader className='p-2'>
        <CardTitle>{superhero}</CardTitle>
        <CardDescription>{alter_ego}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className='border p-3 rounded-xl shadow-lg'>
          <img
            src={`/assests/heroes/${id}.jpg`}
            alt='hero-name'
            className='rounded-xl shadow-lg'
          />
        </div>
        <div className='pt-4 pb-0'>
          <div className='grid grid-cols-2'>
            <span className='flex h-2 w-full rounded-full bg-sky-500' />
            <div>
              <p className='text-sm font-medium leading-none'>
                Primera aparición
              </p>
              <p className='text-sm text-muted-foreground'>
                {first_appearance}
              </p>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button
          className='w-full'
          onClick={() => {
            navigate(`/hero/${id}`);
          }}
        >
          <UserRoundSearch></UserRoundSearch>Visitar Héroe
        </Button>
      </CardFooter>
    </Card>
  );
}

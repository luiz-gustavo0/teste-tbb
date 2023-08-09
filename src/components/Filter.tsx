import { ChangeEvent } from 'react';

import { useCategory } from '@/hooks/useCategory';
import { Input } from './ui/Input';

type FilterProps = {
  filter: string[];
  setFilter: (values: string[]) => void;
};

export const Filter = ({ filter, setFilter }: FilterProps) => {
  const { categories } = useCategory();

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    if (target.checked) {
      setFilter([...filter, target.value]);
    } else {
      setFilter(filter.filter((item) => item !== target.value));
    }
  };

  return (
    <>
      <div className='w-full max-w-fit sm:max-w-[250px]'>
        <div className='py-2 border-b border-b-slate-900'>
          <span className='text-slate-900'>Filtros</span>
        </div>
        <div className='mt-6 space-y-3'>
          {categories.map((category) => (
            <div key={category.id} className='flex items-center space-x-2'>
              <Input
                type='checkbox'
                className='w-3 h-3 sm:w-4 sm:h-4'
                id={category.id}
                onChange={handleChange}
                value={category.name}
              />
              <label
                htmlFor={category.id}
                className='text-xs sm:text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
              >
                {category.name}
              </label>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

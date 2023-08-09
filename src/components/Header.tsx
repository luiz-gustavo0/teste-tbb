import { Search } from 'lucide-react';

import { Input } from './ui/Input';

type HeaderProps = {
  search: string;
  setSearch: (value: string) => void;
};

export const Header = ({ search, setSearch }: HeaderProps) => {
  return (
    <header className='w-full p-6 space-y-6'>
      <h1 className='text-3xl uppercase font-bold text-slate-900'>
        O que você está procurando?
      </h1>

      <div className='max-w-[500px] flex items-center border-b border-b-slate-300'>
        <Input
          className='border-0 rounded-none focus-visible:ring-0 px-0 focus-visible:ring-offset-0'
          placeholder='BUSQUE AQUI'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Search size={24} className='text-slate-500' />
      </div>
    </header>
  );
};

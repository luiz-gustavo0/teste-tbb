import { useState } from 'react';

import { Filter } from './components/Filter';
import { Header } from './components/Header';
import { Products } from './components/Products';

function App() {
  const [filters, setFilters] = useState<string[]>([]);
  const [search, setSearch] = useState<string>('');

  return (
    <div className='w-full min-h-screen'>
      <div className='w-full max-w-[1600px] mx-auto'>
        <Header search={search} setSearch={setSearch} />
        <main className='w-full flex px-6 pt-6 gap-6'>
          <Filter filter={filters} setFilter={setFilters} />

          <div className='w-full'>
            <div className='py-2 border-b border-b-slate-900 mb-6'>
              <span className='text-slate-900'>Produtos</span>
            </div>
            <Products filters={filters} search={search} />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;

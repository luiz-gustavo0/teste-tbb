import { useProducts } from '@/hooks/useProducts';
import { ProductItem } from './ProductItem';

type ProductsProps = {
  filters?: string[];
  search?: string;
};

export const Products = ({ filters, search }: ProductsProps) => {
  const { products } = useProducts({ filters, search });

  return (
    <section className='w-full flex gap-4 flex-wrap pb-8'>
      {products.length === 0 ? (
        <p className='text-slate-500 text-lg'>Nenhum produto encontrado</p>
      ) : (
        products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))
      )}
    </section>
  );
};

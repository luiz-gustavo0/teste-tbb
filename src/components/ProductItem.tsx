import { Product } from '@/hooks/useProducts';
import { Card, CardContent, CardDescription } from './ui/Card';

type ProductItemProps = {
  product: Product;
};

export const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <Card className='w-full max-w-[300px] flex flex-col'>
      <CardContent className='p-0 w-full h-[200px]'>
        <img
          className='w-full h-[200px] object-contain'
          src={product.images[0].asset.url}
          alt={product.images[0].alt}
        />
      </CardContent>
      <div className='p-4 mt-auto'>
        <CardDescription className='mb-3 text-slate-900 font-semibold'>
          {product.name}
        </CardDescription>
        <CardDescription>{product.shortDescription}</CardDescription>
      </div>
    </Card>
  );
};

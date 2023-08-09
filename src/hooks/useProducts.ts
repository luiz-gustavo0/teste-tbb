import productsData from '@/data/products.json';

export type Product = {
  name: string;
  shortDescription: string;
  id: string;
  images: {
    alt: string;
    asset: {
      url: string;
    };
  }[];
  category: {
    _id: string;
    name: string;
  };
};

type Props = {
  filters?: string[];
  search?: string;
};

export const useProducts = ({ filters = [], search = '' }: Props) => {
  const productsFiltered: Product[] = productsData.data.nodes.filter((item) => {
    if (search !== '' && !filters.length) {
      return item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase());
    }

    if (filters.length && !search) {
      return filters?.includes(item.category.name);
    }

    if (filters.length && search) {
      return (
        filters?.includes(item.category.name) && item.name.includes(search)
      );
    }
  });

  const products =
    !filters.length && !search ? productsData.data.nodes : productsFiltered;

  return { products };
};

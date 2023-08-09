import products from '@/data/products.json';

type Category = {
  id: string;
  name: string;
};

export const useCategory = () => {
  const categories: Category[] = [];

  const data: Category[] = products.data.nodes.map((item) => {
    return {
      id: item.category._id,
      name: item.category.name,
    };
  });

  data.forEach((item) => {
    const duplicated =
      categories.findIndex((c) => {
        return item.id === c.id;
      }) > -1;

    if (!duplicated) {
      categories.push(item);
    }
  });

  return { categories };
};

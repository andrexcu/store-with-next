import getCategories from "@/actions/get-categories";
import getCategory from "@/actions/get-category";
import { getProducts, getProductsForCategory } from "@/actions/get-products";
import TopCategory from "@/components/sections/TopCategory";
import Navbar from "@/components/navbar/Navbar";
import Container from "@/components/ui/Container";
import { Category } from "@/lib/types";
import FeaturedProducts from "@/components/sections/FeaturedProducts";

export const revalidate = 0;

const HomePage = async () => {
  const categories = await getCategories();
  // const categoryId = category.id;
  // const products = categories.map(async (category: Category) => {
  //   await getProductsForCategory(category.id);
  // });

  const productsPromises = categories.map((category) =>
    getProducts({ categoryId: category.id })
  );

  const products = await Promise.all(productsPromises);

  const featuredProducts = await getProducts({ isFeatured: true });

  return (
    <Container>
      <div className="py-8 text-center h-full text-3xl font-bold">
        {/* {categories.map((category) => (
          <div key={category.id}>{category.id}</div>
        ))} */}
        <TopCategory categories={categories} products={products} />
        <FeaturedProducts products={featuredProducts} />
      </div>
    </Container>
  );
};

export default HomePage;

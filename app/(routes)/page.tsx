import getCategories from "@/actions/get-categories";
import getCategory from "@/actions/get-category";
import { getProducts, getProductsForCategory } from "@/actions/get-products";
import TopCategory from "@/components/sections/TopCategory";
import Navbar from "@/components/navbar/Navbar";
import Container from "@/components/ui/Container";
import { Category } from "@/lib/types";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import Info from "@/components/sections/Info";
import getBillboard from "@/actions/get-billboard";
import EyeCatch from "@/components/sections/EyeCatch";

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
  const billboard = await getBillboard("65a0ed8aabe0a553a4b79a7f");
  const category = await getCategory("65a12e6435896fa930ad07e9");

  const photographyProducts = await getProducts({
    categoryId: "65a12e6435896fa930ad07e9",
  });
  // console.log(category);

  return (
    <Container>
      <div className="py-8 text-center h-full text-3xl font-bold">
        {/* {categories.map((category) => (
          <div key={category.id}>{category.id}</div>
        ))} */}
        <TopCategory categories={categories} products={products} />
        <FeaturedProducts products={featuredProducts} />
        <Info billboard={billboard} />
        <EyeCatch category={category} products={photographyProducts} />
      </div>
    </Container>
  );
};

export default HomePage;

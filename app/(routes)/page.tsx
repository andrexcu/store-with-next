import getBillboard from "@/actions/get-billboard";
import getCategories from "@/actions/get-categories";
import getCategory from "@/actions/get-category";
import EyeCatch from "@/components/sections/EyeCatch";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import Info from "@/components/sections/Info";
import InstagramPhotos from "@/components/sections/InstagramPhotos";
import Newsletter from "@/components/sections/Newsletter";
import OrderInfo from "@/components/sections/OrderInfo";
import TopCategory from "@/components/sections/TopCategory";
import Container from "@/components/ui/Container";
import { getProducts } from "@/actions/get-products";
import Client from "@/components/ui/Client";

// export const revalidate = 0;

const HomePage = async () => {
  const categories = await getCategories();

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

  return (
    <>
      <TopCategory categories={categories} products={products} />

      <FeaturedProducts products={featuredProducts} />

      <Container>
        <div className="text-center h-full text-3xl">
          <Info billboard={billboard} />
          <EyeCatch category={category} products={photographyProducts} />
          <Newsletter />
          <OrderInfo />
        </div>
      </Container>
      <InstagramPhotos />
    </>
  );
};

export default HomePage;

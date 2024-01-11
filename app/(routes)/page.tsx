import getCategories from "@/actions/get-categories";
import getCategory from "@/actions/get-category";
import getProducts from "@/actions/get-products";
import TopCategory from "@/components/TopCategory";
import Navbar from "@/components/navbar/Navbar";
import Container from "@/components/ui/Container";

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const category = await getCategory("659e38eef34c8be65e096404");
  // const categories = await getCategories();
  // console.log(categories);
  // console.log(category);
  return (
    <Container>
      <div className="py-8 text-center h-dvh text-3xl font-bold">
        {/* {categories.map((category) => (
          <div key={category.id}>{category.id}</div>
        ))} */}

        <TopCategory category={category} />
      </div>
    </Container>
  );
};

export default HomePage;

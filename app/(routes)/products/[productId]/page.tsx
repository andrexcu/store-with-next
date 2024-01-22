import getProduct from "@/actions/get-product";
import { getProducts } from "@/actions/get-products";
import Gallery from "@/components/gallery";
import Info from "@/components/modal/Info";
import Container from "@/components/ui/Container";
import ProductList from "@/components/ui/product-list";
import { Separator } from "@/components/ui/separator";
import React from "react";

interface ProductPageProps {
  params: {
    productId: string;
  };
}

const ProductPage = async ({ params }: ProductPageProps) => {
  const product = await getProduct(params.productId);

  const suggestedProducts = await getProducts({
    categoryId: product?.category?.id,
  });

  return (
    <Container>
      <div className="min-h-dvh overflow-hidden">
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            {/* Gallery */}
            <Gallery images={product.images} />
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              {/* info */}
              <Info data={product} />
            </div>
          </div>
          <Separator className="bg-zinc-400 my-10" />
          <ProductList
            title="Related items"
            items={suggestedProducts}
            productId={params.productId}
          />
        </div>
      </div>
    </Container>
  );
};

export default ProductPage;

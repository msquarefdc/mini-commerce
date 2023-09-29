import { Box } from "@mui/material";
import { Product } from "@prisma/client";
import Link from "next/link";
import ProductCard from "../productCard";

interface Props {
  products: Product[];
}

const Products = ({ products }: Props) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
      {products.map((product) => (
        <Link
          key={product.id}
          href={`products/${product.id}`}
          style={{ textDecoration: "none" }}
        >
          <Box sx={{ mr: 5, mb: 3 }}>
            <ProductCard
              title={product.title}
              description={product.description}
              imageUrl={product.imageUrl}
            />
          </Box>
        </Link>
      ))}
    </Box>
  );
};

export default Products;

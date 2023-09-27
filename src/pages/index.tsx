import ProductCard from "@/components/productCard";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { fetchProducts } from "@/store/slices/productSlice";
import { Box } from "@mui/material";
import { useEffect } from "react";

export default function Home() {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products.items);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
        {products.map((product) => (
          <Box key={product.id} sx={{ mr: 5, mb: 3 }}>
            <ProductCard
              title={product.title}
              description={product.description}
              imageUrl={product.imageUrl}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
}

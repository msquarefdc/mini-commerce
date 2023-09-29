import Products from "@/components/products";
import SearchProduct from "@/components/searchProducts";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { fetchProducts } from "@/store/slices/productSlice";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Box, Typography } from "@mui/material";
import { Product } from "@prisma/client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products.items);
  const cartItems = useAppSelector((state) => state.cart.items);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  useEffect(() => {
    if (products.length) {
      setFilteredProducts(products);
    }
  }, [products]);

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Link href={"/cart"} style={{ textDecoration: "none" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            mr: 3,
            cursor: "pointer",
          }}
        >
          <ShoppingCartIcon sx={{ fontSize: 50, color: "purple" }} />
          {cartItems.length > 0 && (
            <Typography variant="h5" sx={{ color: "green" }}>
              {cartItems.length}
            </Typography>
          )}
        </Box>
      </Link>
      <SearchProduct
        products={products}
        setFilteredProducts={setFilteredProducts}
      />
      <Products products={filteredProducts} />
    </Box>
  );
}

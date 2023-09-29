import { Box, TextField } from "@mui/material";
import { Product } from "@prisma/client";
import { ChangeEvent, Dispatch, SetStateAction } from "react";

interface Props {
  products: Product[];
  setFilteredProducts: Dispatch<SetStateAction<Product[]>>;
}

const SearchProducts = ({ products, setFilteredProducts }: Props) => {
  const handleSearch = (
    evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const searchText = evt.target.value.toLowerCase();
    const searchResult = products.filter((product) =>
      product.title.toLowerCase().includes(searchText)
    );
    setFilteredProducts(searchResult);
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <TextField
        sx={{ width: 800, margin: "0 auto", mb: 2 }}
        placeholder="Search products.."
        onChange={handleSearch}
      />
    </Box>
  );
};

export default SearchProducts;

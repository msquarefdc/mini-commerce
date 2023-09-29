import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { updateQuantity } from "@/store/slices/cartSlice";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { Box, Button, Typography } from "@mui/material";

const Cart = () => {
  const cartItems = useAppSelector((state) => state.cart.items);
  const dispatch = useAppDispatch();

  const getCartTotalPrice = () => {
    let totalPrice = 0;
    cartItems.forEach((item) => (totalPrice += item.price * item.quantity));
    return totalPrice;
  };

  const increaseQuantity = (id: number, quantity: number) => {
    dispatch(updateQuantity({ id, quantity }));
  };

  const decreaseQuantity = (id: number, quantity: number) => {
    dispatch(updateQuantity({ id, quantity }));
  };

  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        {cartItems.length ? (
          <Box>
            {cartItems.map((item) => (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  mt: 5,
                }}
              >
                <Box>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <img src={item.imageUrl || ""} width={150} />
                    <Box sx={{ ml: 3 }}>
                      <Typography variant="h6">{item.title}</Typography>
                      <Typography variant="h6">{item.price}</Typography>
                    </Box>
                  </Box>
                </Box>
                <Box sx={{ ml: 5 }}>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <RemoveCircleOutlineIcon
                      sx={{ fontSize: 40, color: "green", cursor: "pointer" }}
                      onClick={() =>
                        decreaseQuantity(item.id, item.quantity - 1)
                      }
                    />
                    <Typography sx={{ mx: 2 }} variant="h4">
                      {item.quantity}
                    </Typography>
                    <AddCircleOutlineIcon
                      sx={{ fontSize: 40, color: "green", cursor: "pointer" }}
                      onClick={() =>
                        increaseQuantity(item.id, item.quantity + 1)
                      }
                    />
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        ) : (
          <Typography variant="h1">Empty cart</Typography>
        )}
      </Box>
      {cartItems.length > 0 && (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              mt: 5,
            }}
          >
            <Typography variant="h3">
              Total price: {getCartTotalPrice()}
            </Typography>
            <Button variant="contained" sx={{ width: "fit-content", my: 3 }}>
              Confirm order
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Cart;

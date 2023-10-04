import { useAppDispatch } from "@/store/hooks";
import { cancelOrder } from "@/store/slices/cartSlice";
import { Alert, Box, Button, Snackbar, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";

const OrderConfirmation = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const orderId = router.query.orderId as string;
  const status = router.query.status as string;
  const dispatch = useAppDispatch();

  const onSuccess = () => {
    setOpen(true);
    setTimeout(() => {
      router.push("/");
    }, 3000);
  };

  const handleCancelOrder = () => {
    dispatch(cancelOrder({ orderId, onSuccess }));
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "95vh",
        justifyContent: "center",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography variant="h4">Order: {orderId}</Typography>
      <Typography variant="h6">Status: {status}</Typography>
      <Box sx={{ mt: 2 }}>
        <Button variant="contained" onClick={handleCancelOrder}>
          Cancel order
        </Button>
      </Box>
      <Snackbar
        open={open}
        onClose={() => setOpen(false)}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <Alert severity="success" sx={{ width: "100%" }}>
          Order has been cancelled.
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default OrderConfirmation;

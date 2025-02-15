"use client";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  IconButton,
  Button,
  Divider,
  TextField,
} from "@mui/material";
import {
  Delete as DeleteIcon,
  Add as AddIcon,
  Remove as RemoveIcon,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import { CartContext } from "@/components/page-layout";
import React from "react";

// Consistent color palette
const colors = {
  primary: "#8B4513", // Saddle Brown
  secondary: "#D2691E", // Chocolate
  background: "#FFF5E6", // Light warm background
  text: "#4A3A2C", // Dark warm brown
  highlight: "#FF6B35", // Vibrant orange for accents
};

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  imageUrl?: string;
}

export default function CartPage() {
  const [cartItems, setCartItems] = React.useContext(CartContext);

  let totalItems = 0;
  // Calculate totals
  const subtotal = Object.entries(cartItems).reduce((acc, [id, item]) => {
    totalItems += item.count;
    return acc + item.price * item.count;
  }, 0);
  console.log("subtotal", subtotal);
  const tax = subtotal * 0.08; // 8% tax example
  const shipping = subtotal > 100 ? 0 : 9.99;
  const total = subtotal + tax + shipping;

  const handleCheckout = async () => {
    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        cartItems,
        total,
      }),
    });

    const paymentRes = await res.json();
    window.location.href = paymentRes.url
  };

  return (
    <>
      <Box
        sx={{
          backgroundColor: colors.background,
          minHeight: "calc(100vh - 64px)",
          py: 8,
        }}
      >
        <Container maxWidth="xl">
          <Typography
            variant="h2"
            sx={{
              textAlign: "center",
              color: colors.primary,
              marginBottom: 4,
              fontWeight: 700,
            }}
          >
            Your Shopping Cart
          </Typography>

          {totalItems === 0 ? (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "50vh",
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  color: colors.text,
                  marginBottom: 2,
                }}
              >
                Your cart is empty
              </Typography>
              <Button
                variant="contained"
                href="/shop"
                sx={{
                  backgroundColor: colors.primary,
                  "&:hover": {
                    backgroundColor: colors.secondary,
                  },
                }}
              >
                Continue Shopping
              </Button>
            </Box>
          ) : (
            <Grid container spacing={4}>
              {/* Cart Items Column */}
              <Grid
                item
                xs={12}
                md={8}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 3,
                }}
              >
                {Object.values(cartItems).map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        borderRadius: 3,
                        boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
                      }}
                    >
                      {/* Product Image */}
                      {item.imageUrl && (
                        <CardMedia
                          component="img"
                          sx={{
                            width: 150,
                            height: 150,
                            objectFit: "cover",
                            margin: 2,
                            borderRadius: 2,
                          }}
                          image={item.imageUrl}
                          alt={item.name}
                        />
                      )}

                      {/* Product Details */}
                      <CardContent
                        sx={{
                          flex: 1,
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Box>
                          <Typography
                            variant="h6"
                            sx={{
                              color: colors.text,
                              fontWeight: 600,
                            }}
                          >
                            {item.name}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            ${item.price.toFixed(2)} each
                          </Typography>
                        </Box>

                        {/* Quantity Control */}
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                          }}
                        >
                          <IconButton
                            onClick={() =>
                              setCartItems({
                                ...cartItems,
                                [item.id]: {
                                  ...item,
                                  count: !item.count ? 0 : item.count - 1,
                                },
                              })
                            }
                            size="small"
                            sx={{
                              color: colors.text,
                              border: `1px solid ${colors.text}`,
                            }}
                          >
                            <RemoveIcon />
                          </IconButton>

                          <TextField
                            variant="outlined"
                            type="number"
                            sx={{ marginRight: "auto" }}
                            value={item.count}
                            onChange={(e) => {
                              const newQty = parseInt(e.target.value, 10);

                              if (!isNaN(newQty)) {
                                if (newQty < 0 || newQty > 20) {
                                  return alert(
                                    "Please enter a quantity between 0 and 20"
                                  );
                                }
                                setCartItems({
                                  ...cartItems,
                                  [item.id]: {
                                    ...item,
                                    count: newQty,
                                  },
                                });
                              }
                            }}
                            InputProps={{
                              sx: {
                                width: 60,
                                "& input": {
                                  textAlign: "right",
                                  color: colors.text,
                                },
                              },
                            }}
                          />

                          <IconButton
                            onClick={() =>
                              setCartItems({
                                ...cartItems,
                                [item.id]: {
                                  ...item,
                                  count: item.count >= 20 ? 20 : item.count + 1,
                                },
                              })
                            }
                            size="small"
                            sx={{
                              color: colors.text,
                              border: `1px solid ${colors.text}`,
                            }}
                          >
                            <AddIcon />
                          </IconButton>
                        </Box>

                        {/* Item Total and Remove */}
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 2,
                          }}
                        >
                          <Typography
                            variant="h6"
                            sx={{
                              color: colors.secondary,
                              fontWeight: 600,
                            }}
                          >
                            ${(item.price * item.count).toFixed(2)}
                          </Typography>

                          <IconButton
                            onClick={() => {
                              const newCartItems = { ...cartItems };
                              delete newCartItems[item.id];
                              setCartItems(newCartItems);
                            }}
                            sx={{
                              color: "error.main",
                              "&:hover": {
                                backgroundColor: "error.light",
                                color: "white",
                              },
                            }}
                          >
                            <DeleteIcon />
                          </IconButton>
                        </Box>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}

                {/* Clear Cart Button */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    mt: 2,
                  }}
                >
                  <Button
                    variant="outlined"
                    onClick={() => setCartItems({})}
                    sx={{
                      borderColor: colors.text,
                      color: colors.text,
                      "&:hover": {
                        backgroundColor: `${colors.text}10`,
                        borderColor: colors.text,
                      },
                    }}
                  >
                    Clear Cart
                  </Button>
                </Box>
              </Grid>

              {/* Order Summary Column */}
              <Grid item xs={12} md={4}>
                <Card
                  sx={{
                    position: "sticky",
                    top: 100,
                    borderRadius: 3,
                    boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
                    backgroundColor: "white",
                  }}
                >
                  <CardContent>
                    <Typography
                      variant="h5"
                      sx={{
                        mb: 2,
                        color: colors.text,
                        fontWeight: 600,
                      }}
                    >
                      Order Summary
                    </Typography>

                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        mb: 1,
                      }}
                    >
                      <Typography>Subtotal</Typography>
                      <Typography>${subtotal.toFixed(2)}</Typography>
                    </Box>

                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        mb: 1,
                      }}
                    >
                      <Typography>Shipping</Typography>
                      <Typography>
                        {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
                      </Typography>
                    </Box>

                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        mb: 1,
                      }}
                    >
                      <Typography>Tax</Typography>
                      <Typography>${tax.toFixed(2)}</Typography>
                    </Box>

                    <Divider sx={{ my: 2 }} />

                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        mb: 2,
                      }}
                    >
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        Total
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{
                          color: colors.secondary,
                          fontWeight: 600,
                        }}
                      >
                        ${total.toFixed(2)}
                      </Typography>
                    </Box>

                    <Button
                      fullWidth
                      variant="contained"
                      sx={{
                        backgroundColor: colors.primary,
                        color: "white",
                        "&:hover": {
                          backgroundColor: colors.secondary,
                        },
                      }}
                      onClick={handleCheckout}
                    >
                      Proceed to Checkout
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          )}
        </Container>
      </Box>
    </>
  );
}

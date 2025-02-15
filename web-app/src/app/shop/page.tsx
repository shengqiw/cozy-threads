"use client";
import React, { useContext, useEffect, useState } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
import type { ShopItem } from "@/mockData/shopItems";
import { useSearchParams } from "next/navigation";
import { sign } from "crypto";
import { CartContext } from "@/components/page-layout";
import { count } from "console";
import { colors } from "@/mockData/site-colors";



export default function ShopPage({searchParams}: {searchParams: {filter: string | undefined}}) {
  const [shopItems, setShopItems] = useState<ShopItem[]>([]);
  const [selectedSize, setSelectedSize] = useState<{
    [key: string]: string;
  }>({});
  const [filteredCategory, setFilteredCategory] = useState<string>(
    searchParams?.filter || ""
  );
  const [cartItems, setCartItems] = useContext(CartContext);

  useEffect(() => {
    console.log("filteredCategory", filteredCategory);
    const fetchItems = async () => {
      const itemsRes = await fetch("/api/getItems?filter=" + filteredCategory);
      const { items } = await itemsRes.json();
      setShopItems(items);
    };
    fetchItems();
  }, [filteredCategory]);

  const handleAddToCart = (item: ShopItem) => {
    if (!selectedSize[item.id]) return alert("Please select a size.");

    const currentItem = {
      id: item.id,
      name: item.name,
      price: item.price,
      size: selectedSize[item.id],
      type: item.type,
      imageUrl: item.imageUrl,
      count: cartItems[item.id] ? cartItems[item.id].count + 1 : 1,
    };
    setCartItems({
      ...cartItems,
      [currentItem.id]: currentItem,
    });
  };

  return (
    <>
      <Box
        sx={{
          backgroundColor: colors.background,
          backgroundImage: "linear-gradient(45deg, #f0e5db 0%, #fff2d1 100%)",
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
            Our Collection
          </Typography>

          {/* Category Filters */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginBottom: 4,
            }}
          >
            <FormControl variant="outlined" sx={{ minWidth: 200 }}>
              <InputLabel>Filter by Category</InputLabel>
              <Select
                value={filteredCategory}
                onChange={(e) =>
                  setFilteredCategory(
                    e.target.value === "all" ? "" : e.target.value
                  )
                }
                label="Filter by Category"
              >
                <MenuItem value="all">All Items</MenuItem>
                <MenuItem value="mens">Men's Collection</MenuItem>
                <MenuItem value="womens">Women's Collection</MenuItem>
                <MenuItem value="accessories">Accessories</MenuItem>
              </Select>
            </FormControl>
          </Box>

          {/* Item Grid */}
          <Grid
            container
            spacing={4}
            sx={{
              display: "flex",
              alignItems: "stretch",
            }}
          >
            {shopItems.map((item) => (
              <Grid
                item
                xs={12}
                md={4}
                lg={3}
                key={item.id}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Card
                  sx={{
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: 3,
                    boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
                  }}
                >
                  <CardMedia
                    component="img"
                    height="300"
                    image={item.imageUrl}
                    alt={item.name}
                    sx={{
                      objectFit: "cover",
                      objectPosition: "top center",
                      filter: "none",
                    }}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="div"
                      sx={{
                        color: colors.text,
                        fontWeight: 600,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {item.name}
                    </Typography>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        mb: 2,
                        display: "-webkit-box",
                        overflow: "hidden",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: 2,
                        minHeight: "3em",
                      }}
                    >
                      {item.description}
                    </Typography>
                    <Box display={"flex"} gap={6} ml={2}>
                      
                        <FormControl sx={{ minWidth: 70 }}>
                          <InputLabel id="demo-simple-select-autowidth-label">
                            Size
                          </InputLabel>
                          <Select
                            label="Size"
                            value={selectedSize[item.id] || ""}
                            onChange={(event) =>
                              setSelectedSize({
                                ...selectedSize,
                                [item.id]: event.target.value,
                              })
                            }
                          >
                            {item.sizes.map((size) => (
                              <MenuItem key={size} value={size}>
                                {size}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      <Typography
                        variant="h6"
                        sx={{
                          color: colors.secondary,
                          marginLeft: "auto",
                          marginRight: "1rem",
                          marginTop: "1rem",
                        }}
                      >
                        ${item.price.toFixed(2)}
                      </Typography>
                    </Box>
                  </CardContent>
                  <CardActions sx={{ mt: "auto" }}>
                    <Button
                      fullWidth
                      variant="contained"
                      onClick={() => handleAddToCart(item)}
                      sx={{
                        backgroundColor: colors.primary,
                        color: "white",
                        "&:hover": {
                          backgroundColor: colors.secondary,
                        },
                      }}
                    >
                      Add to Cart
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* No Items Message */}
          {shopItems.length === 0 && (
            <Typography
              variant="h6"
              sx={{
                textAlign: "center",
                color: colors.text,
                mt: 4,
              }}
            >
              No items found in this category.
            </Typography>
          )}
        </Container>
      </Box>
    </>
  );
}

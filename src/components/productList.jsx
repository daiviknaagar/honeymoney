import * as React from 'react';
import { Box, Button, Typography, Card, CardContent, CardActions } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import ImageCarousel from './carousel';
import theme from './theme';


export default function ProductList() {

  return (
    <Box sx={{ pt: 5, backgroundColor: theme.colors.beige }}>
      <Box sx={{ flexGrow: 1, margin: 2 }}>
        <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 16 }}>
          {productListData.map(product => (
            <Grid xs={4} sm={4} md={4}>
              <Card sx={{ maxWidth: 500, backgroundColor: theme.colors.lightBeige, boxShadow: 2, margin: 1 }}>
                {/* <CardMedia
                                    sx={{ height: 250 }}
                                    image={product.images}
                                    title={product.title}
                                /> */}
                <Box>
                  <ImageCarousel images={product.images} ></ImageCarousel>
                </Box>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {product.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', overflow: "hidden", textOverflow: "ellipsis", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" }}>
                    {product.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" sx={{ color: theme.colors.brown }}>Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

    </Box>
  );
}

const productListData = [
  {
    title: "Chopping Board",
    description: "Elegant and durable board for chopping and preparing ingredients with a luxurious touch.",
    images: ["/images/chopping_board_1.jpg", "/images/chopping_board_2.jpg", "/images/chopping_board_3.jpg", "/images/chopping_board_4.jpg", "/images/chopping_board_5.jpg", "/images/chopping_board_6.jpg", "/images/chopping_board_7.jpg", "/images/chopping_board_8.jpg", "/images/chopping_board_9.jpg"],
    link: ""
  },
  {
    title: "Coaster Sets",
    description: "Set of refined coasters designed to protect surfaces while adding a touch of marble elegance.",
    images: ["/images/coaster_1.jpg", "/images/coaster_2.jpg", "/images/coaster_3.jpg", "/images/coaster_4.jpg", "/images/coaster_5.jpg", "/images/coaster_6.jpg", "/images/coaster_7.jpg", "/images/coaster_8.jpg", "/images/coaster_9.jpg"],
    link: ""
  },
  {
    title: "Utility Bowls",
    description: "Organize in style, perfect for holding jewelry, keys, or small kitchen essentials with a touch of sophistication.",
    images: ["/images/bowl_1.jpg", "/images/bowl_2.jpg", "/images/bowl_3.jpg", "/images/bowl_4.jpg"],
    link: ""
  },
  // {
  //   title: "Mortar & Pestle",
  //   description: "Classic tool for grinding spices and herbs, combining functionality with sophistication.",
  //   images: [],
  //   link: ""
  // },
  // {
  //   title: "Paper Towel Holder",
  //   description: "Sturdy and stylish holder to keep your kitchen paper towels organized and accessible.",
  //   images: [],
  //   link: ""
  // },
  // {
  //   title: "Cake Stand",
  //   description: "Elegant stand perfect for showcasing cakes and desserts in a sophisticated manner.",
  //   images: [],
  //   link: ""
  // },
  // {
  //   title: "Lazy Susan",
  //   description: "Rotating tray ideal for easy access to condiments and serving dishes with a marble finish.",
  //   images: [],
  //   link: ""
  // },
  // {
  //   title: "Cheese Dome",
  //   description: "Elegant dome with a marble base to keep cheeses fresh and beautifully displayed.",
  //   images: [],
  //   link: ""
  // },
  {
    title: "Tray",
    description: "Versatile tray for serving drinks or organizing items with a sleek marble touch.",
    images: ["/images/tray_1.jpg", "/images/tray_2.jpg", "/images/tray_4.jpg", "/images/tray_5.jpg", "/images/tray_6.jpg", "/images/tray_7.jpg", "/images/tray_3.jpg", "/images/tray_8.jpg"],
    link: ""
  },
  // {
  //   title: "Boxes",
  //   description: "Decorative and functional marble boxes for storing small items or trinkets.",
  //   images: [],
  //   link: ""
  // },
  // {
  //   title: "Candle Holder",
  //   description: "Stylish candle holder that adds a touch of luxury and ambiance to any room.",
  //   images: [],
  //   link: ""
  // },
  // {
  //   title: "Tea Light Holder",
  //   description: "Elegant holder for tea lights, perfect for creating a warm and inviting atmosphere.",
  //   images: [],
  //   link: ""
  // },
  // {
  //   title: "Lotion Dispenser",
  //   description: "Sophisticated dispenser designed to elevate your bathroom or kitchen decor.",
  //   images: [],
  //   link: ""
  // },
  // {
  //   title: "Tumbler",
  //   description: "Sleek and durable tumbler for stylish hydration or serving beverages.",
  //   images: [],
  //   link: ""
  // },
  // {
  //   title: "Toothbrush Holder",
  //   description: "Chic and functional holder to keep your toothbrushes organized and accessible.",
  //   images: [],
  //   link: ""
  // },
  // {
  //   title: "Soap Disc",
  //   description: "Elegant disc designed to hold soap while adding a touch of sophistication to your sink area.",
  //   images: [],
  //   link: ""
  // },
  // {
  //   title: "Waste Basket",
  //   description: "Luxurious waste basket that combines style with functionality for your bathroom or office.",
  //   images: [],
  //   link: ""
  // },
  // {
  //   title: "Tissue Holder",
  //   description: "Elegant holder designed to keep tissues neatly stored and easily accessible.",
  //   images: [],
  //   link: ""
  // },
  // {
  //   title: "Bath Set",
  //   description: "Coordinated set of marble bathroom accessories that adds elegance and functionality to your space.",
  //   images: [],
  //   link: ""
  // },
  // {
  //   title: "Canister",
  //   description: "Stylish canister for storing kitchen essentials with a touch of marble sophistication.",
  //   images: [],
  //   link: ""
  // },
  {
    title: "Photo Frames",
    description: "Elegant frames designed to showcase your cherished memories with a touch of luxury.",
    images: ["/images/photo_frame_1.jpg", "/images/photo_frame_2.jpg", "/images/photo_frame_3.jpg", "/images/photo_frame_4.jpg", "/images/photo_frame_5.jpg", "/images/photo_frame_6.jpg", "/images/photo_frame_7.jpg", "/images/photo_frame_8.jpg", "/images/photo_frame_9.jpg"],
    link: ""
  },
  {
    title: "Utensil Holder",
    description: "Marble utensil holder, designed to keep your tools stylishly organized and within reach.",
    images: ["/images/utensil_holder_2.jpg", "/images/utensil_holder_3.jpg", "/images/utensil_holder_4.jpg", "/images/utensil_holder_5.jpg", "/images/utensil_holder_6.jpg", "/images/utensil_holder_1.jpg"],
    link: ""
  },
  {
    title: "Tables",
    description: "Transform your space with our compact tables made from agate stone & marble pattern",
    images: ["/images/table_1.jpg", "/images/table_2.jpg", "/images/table_3.jpg", "/images/table_4.jpg", "/images/table_5.jpg", "/images/table_6.jpg"],
    link: ""
  },
  // {
  //   title: "Wine Rack",
  //   description: "Sophisticated wine rack that combines functionality with a refined marble aesthetic.",
  //   images: [],
  //   link: ""
  // }
];

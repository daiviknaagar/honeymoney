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
    images: ["/images/ChoppingBoards/ChoppingBoard1.jpg", "/images/ChoppingBoards/ChoppingBoard2.jpg", "/images/ChoppingBoards/ChoppingBoard3.jpg", "/images/ChoppingBoards/ChoppingBoard4.jpg", "/images/ChoppingBoards/ChoppingBoard5.jpg", "/images/ChoppingBoards/ChoppingBoard6.jpg", "/images/ChoppingBoards/ChoppingBoard7.jpg", "/images/ChoppingBoards/ChoppingBoard8.jpg", "/images/ChoppingBoards/ChoppingBoard9.jpg"],
    link: ""
  },
  {
    title: "Coaster Sets",
    description: "Set of refined coasters designed to protect surfaces while adding a touch of marble elegance.",
    images: ["/images/Coasters/Coaster1.jpg", "/images/Coasters/Coaster2.jpg", "/images/Coasters/Coaster3.jpg", "/images/Coasters/Coaster4.jpg", "/images/Coasters/Coaster5.jpg", "/images/Coasters/Coaster6.jpg", "/images/Coasters/Coaster7.jpg", "/images/Coasters/Coaster8.jpg", "/images/Coasters/Coaster9.jpg"],
    link: ""
  },
  {
    title: "Utility Bowls",
    description: "Organize in style, perfect for holding jewelry, keys, or small kitchen essentials with a touch of sophistication.",
    images: ["/images/Bowls/Bowl1.jpg", "/images/Bowls/Bowl2.jpg", "/images/Bowls/Bowl3.jpg", "/images/Bowls/Bowl4.jpg"],
    link: ""
  },
  {
    title: "Vase",
    description: "Elegant decorative vessels crafted from marble, perfect for displaying flowers or as standalone art pieces.",
    images: ["/images/Vases/Vase1.jpg", "/images/Vases/Vase2.jpg", "/images/Vases/Vase3.jpg", "/images/Vases/Vase4.jpg", "/images/Vases/Vase5.jpg"],
    link: ""
  },
  {
    title: "Figurine",
    description: "Intricate sculptures made from marble, often depicting animals, people, or abstract forms, adding a touch of sophistication to any space.",
    images: ["/images/Figurines/Figurine1.jpg", "/images/Figurines/Figurine2.jpg", "/images/Figurines/Figurine3.jpg", "/images/Figurines/Figurine4.jpg", "/images/Figurines/Figurine5.jpg", "/images/Figurines/Figurine6.jpg", "/images/Figurines/Figurine7.jpg", "/images/Figurines/Figurine8.jpg"],
    link: ""
  },
  {
    title: "Box",
    description: "Stylish and functional marble containers, ideal for storing small items or as decorative accents.",
    images: ["/images/Boxes/Box1.jpg", "/images/Boxes/Box2.jpg", "/images/Boxes/Box3.jpg", "/images/Boxes/Box4.jpg"],
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
    images: ["/images/Trays/Tray2.jpg", "/images/Trays/Tray4.jpg", "/images/Trays/Tray5.jpg", "/images/Trays/Tray6.jpg", "/images/Trays/Tray7.jpg", "/images/Trays/Tray3.jpg", "/images/Trays/Tray8.jpg", "/images/Trays/Tray9.jpg", "/images/Trays/Tray10.jpg"],
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
    images: ["/images/PhotoFrames/PhotoFrame1.jpg", "/images/PhotoFrames/PhotoFrame2.jpg", "/images/PhotoFrames/PhotoFrame3.jpg", "/images/PhotoFrames/PhotoFrame4.jpg", "/images/PhotoFrames/PhotoFrame5.jpg", "/images/PhotoFrames/PhotoFrame6.jpg", "/images/PhotoFrames/PhotoFrame7.jpg", "/images/PhotoFrames/PhotoFrame8.jpg", "/images/PhotoFrames/PhotoFrame9.jpg"],
    link: ""
  },
  {
    title: "Utensil Holder",
    description: "Marble utensil holder, designed to keep your tools stylishly organized and within reach.",
    images: ["/images/UtensilHolders/UtensilHolder2.jpg", "/images/UtensilHolders/UtensilHolder3.jpg", "/images/UtensilHolders/UtensilHolder4.jpg", "/images/UtensilHolders/UtensilHolder5.jpg", "/images/UtensilHolders/UtensilHolder6.jpg", "/images/UtensilHolders/UtensilHolder1.jpg", "/images/UtensilHolders/UtensilHolder7.jpg", "/images/UtensilHolders/UtensilHolder8.jpg", "/images/UtensilHolders/UtensilHolder9.jpg"],
    link: ""
  },
  {
    title: "Accent Tables",
    description: "Transform your space with our compact tables made from agate stone & marble pattern",
    images: ["/images/Tables/Table3.jpg", "/images/Tables/Table1.jpg", "/images/Tables/Table2.jpg", "/images/Tables/Table4.jpg", "/images/Tables/Table5.jpg", "/images/Tables/Table6.jpg"],
    link: ""
  },
  // {
  //   title: "Wine Rack",
  //   description: "Sophisticated wine rack that combines functionality with a refined marble aesthetic.",
  //   images: [],
  //   link: ""
  // }
];

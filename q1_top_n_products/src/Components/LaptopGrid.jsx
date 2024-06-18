// import React, { useState, useEffect } from 'react';
// import { Grid, Card, CardContent, Typography, CircularProgress, Box } from '@mui/material';

// const LaptopGrid = () => {
//   const [laptops, setLaptops] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchLaptops = async () => {
//       try {
//         const response = await fetch('https://20.244.56.144/test/companies/AMZ/categories/TV/products?top=10&minPrice=1&maxPrice=10000', {
//           headers: {
//             'Authorization': 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzE4NjkwNTI3LCJpYXQiOjE3MTg2OTAyMjcsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjEwMDJiZWYwLThlY2ItNDE2MC05YjVkLWM5ZjVhODI1MGRhMCIsInN1YiI6Im1haGFwcmFidXNpdmFzYW15QGdtYWlsLmNvbSJ9LCJjb21wYW55TmFtZSI6ImFmZm9yZE1lZGljYWxzIiwiY2xpZW50SUQiOiIxMDAyYmVmMC04ZWNiLTQxNjAtOWI1ZC1jOWY1YTgyNTBkYTAiLCJjbGllbnRTZWNyZXQiOiJvTEZsV1RCVU1XV0Z4cEd3Iiwib3duZXJOYW1lIjoiTWFoYXByYWJ1Iiwib3duZXJFbWFpbCI6Im1haGFwcmFidXNpdmFzYW15QGdtYWlsLmNvbSIsInJvbGxObyI6IjIxY3NyMTA1In0.iO056jR37r2gDkMX8xgRFGDJdVUZQhWTdgxq3wy0F6k'
//           }
//         });

//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }

//         const data = await response.json();
//         setLaptops(data);
//       } catch (error) {
//         setError(error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchLaptops();
//   }, []);

//   if (loading) {
//     return (
//       <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
//         <CircularProgress />
//       </Box>
//     );
//   }

//   if (error) {
//     return (
//       <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
//         <Typography variant="h6" color="error">
//           {error.message}
//         </Typography>
//       </Box>
//     );
//   }

//   return (
//     <Grid container spacing={2}>
//       {laptops.map((laptop, index) => (
//         <Grid item key={index} xs={12} sm={6} md={4}>
//           <Card>
//             <CardContent>
//               <Typography gutterBottom variant="h5" component="div">
//                 {laptop.productName}
//               </Typography>
//               <Typography variant="body2" color="textSecondary">
//                 Price: ${laptop.price}
//               </Typography>
//               <Typography variant="body2" color="textSecondary">
//                 Rating: {laptop.rating}
//               </Typography>
//               <Typography variant="body2" color="textSecondary">
//                 Discount: {laptop.discount}%
//               </Typography>
//               <Typography variant="body2" color={laptop.availability === 'in-stock' ? 'green' : 'red'}>
//                 Availability: {laptop.availability}
//               </Typography>
//             </CardContent>
//           </Card>
//         </Grid>
//       ))}
//     </Grid>
//   );
// };

// export default LaptopGrid;
import React, { useState, useEffect } from 'react';
import { Grid, Card, CardContent, Typography, CircularProgress, Box } from '@mui/material';

const LaptopGrid = () => {
  const [laptops, setLaptops] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLaptops = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/test/companies/AMZ/categories/Laptop/products?top=10&minPrice=1&maxPrice=10000', {
          headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzE4NjkxNzIzLCJpYXQiOjE3MTg2OTE0MjMsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjEwMDJiZWYwLThlY2ItNDE2MC05YjVkLWM5ZjVhODI1MGRhMCIsInN1YiI6Im1haGFwcmFidXNpdmFzYW15QGdtYWlsLmNvbSJ9LCJjb21wYW55TmFtZSI6ImFmZm9yZE1lZGljYWxzIiwiY2xpZW50SUQiOiIxMDAyYmVmMC04ZWNiLTQxNjAtOWI1ZC1jOWY1YTgyNTBkYTAiLCJjbGllbnRTZWNyZXQiOiJvTEZsV1RCVU1XV0Z4cEd3Iiwib3duZXJOYW1lIjoiTWFoYXByYWJ1Iiwib3duZXJFbWFpbCI6Im1haGFwcmFidXNpdmFzYW15QGdtYWlsLmNvbSIsInJvbGxObyI6IjIxY3NyMTA1In0.gSh9G0DoqqRqCQBClNQ-Ki5Pg4Y5x5_3B2lMiRCBZUA'
          }
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setLaptops(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchLaptops();
  }, []);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <Typography variant="h6" color="error">
          {error.message}
        </Typography>
      </Box>
    );
  }

  return (
    <Grid container spacing={2}>
      {laptops.map((laptop, index) => (
        <Grid item key={index} xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography gutterBottom variant="h5" align='center' component="div">
                {laptop.productName}
              </Typography>
              <Typography variant="body2" align='center' color="textSecondary">
                Price: ${laptop.price}
              </Typography>
              <Typography variant="body2" align='center' color="textSecondary">
                Rating: {laptop.rating}
              </Typography>
              <Typography variant="body2" align='center' color="textSecondary">
                Discount: {laptop.discount}%
              </Typography>
              <Typography variant="body2" align='center' color={laptop.availability === 'yes' ? 'green' : 'red'}>
                Availability: {laptop.availability}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default LaptopGrid;

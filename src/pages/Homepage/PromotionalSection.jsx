import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';

import TopCategoriesCard from '../../components/TopCategoriesCard';

function PromotionalSection() {

  return (
<Box sx={{m:3}}>
<Grid container spacing={3}>
  
  <Grid items xs={12} md={6}><TopCategoriesCard   backgroundColor = 'blue' /></Grid>
  <Grid items xs={12} md={6}><TopCategoriesCard backgroundColor = 'tomato'/ ></Grid>
  <Grid items xs={12} md={6}><TopCategoriesCard backgroundColor = 'gray'/></Grid>
  <Grid items xs={12} md={6}><TopCategoriesCard backgroundColor = 'orange'/></Grid>
  

</Grid>
</Box>
  
    )
};
export default PromotionalSection;
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';

import TopCategoriesCard from '../../components/TopCategoriesCard';

function PromotionalSection() {

  return (
<Box sx={{m:5}}>
<Grid container spacing={3}>
  
  <Grid items xs={12} md={6}><TopCategoriesCard /></Grid>
  <Grid items xs={12} md={6}><TopCategoriesCard/></Grid>
  <Grid items xs={12} md={6}><TopCategoriesCard/></Grid>
  <Grid items xs={12} md={6}><TopCategoriesCard/></Grid>
  

</Grid>
</Box>
  
    )
};
export default PromotionalSection;
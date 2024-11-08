import Stack from '@mui/material/Stack';
import TopCategoriesCard from '../../components/TopCategoriesCard';

function PromotionalSection() {
  return (
    <Stack
      direction={{ xs: 'column', md: 'row' }}
      spacing={{ xs: 1, md: 2 }}
      sx={{ m: { xs: 1, md: 3 } }}
    >
      <TopCategoriesCard backgroundColor="blue" />
      <TopCategoriesCard backgroundColor="tomato" />
    </Stack>
  );
}

export default PromotionalSection;
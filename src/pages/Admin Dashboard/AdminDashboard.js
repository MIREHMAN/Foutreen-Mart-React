import * as React from 'react';

import { alpha } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import AppNavbar from './DashboardComponents/AppNavbar';
import Header from './DashboardComponents/Header';
import SideMenu from './DashboardComponents/SideMenu';
import AppTheme from './theme/shared-theme/AppTheme';
import {
  chartsCustomizations,
  
} from './theme/customizations';
import DashboardContent from './DashboardComponents/DashboardContent';

const xThemeComponents = {
  ...chartsCustomizations,
};

export default function AdminDashboard(props) {
  return (
    <AppTheme {...props} themeComponents={xThemeComponents}>
      <CssBaseline enableColorScheme />
      <Box sx={{ display: 'flex' }}>
        <SideMenu />
        <AppNavbar />
        {/* Main content */}
        <Box
          component="main"
          sx={(theme) => ({
            flexGrow: 1,
            backgroundColor: theme.vars
              ? `rgba(${theme.vars.palette.background.defaultChannel} / 1)`
              : alpha(theme.palette.background.default, 1),
            overflow: 'auto',
          })}
        >
          <Stack
            spacing={2}
            sx={{
              alignItems: 'center',
              mx: 3,
              pb: 10,
              mt: { xs: 8, md: 0 },
            }}
          >
            <Header />
            <DashboardContent/>
          </Stack>
        </Box>
      </Box>
    </AppTheme>
  );
}

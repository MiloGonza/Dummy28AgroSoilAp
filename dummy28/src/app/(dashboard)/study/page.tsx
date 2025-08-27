"use client";

import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import React, { useState } from 'react';

//icons
import RocketOutlined from '@ant-design/icons/RocketOutlined';
import Dashboard from '@ant-design/icons/DashboardOutlined';
import Study from '@ant-design/icons/BookOutlined';
//import { RasterMap } from 'components/RasterMap';
import RasterMap from 'components/RasterMap';

const icons = { RocketOutlined, Dashboard, Study };


export default function FloorStudies() {

  const [showMenu, setShowMenu] = useState(false);

  const togglemenu = () => setShowMenu((prev) => !prev);

   return (
    <Box sx={{ flexGrow: 1, p: 2 }}>

      <Button variant="contained" onClick={togglemenu} sx={{mb:2}}>
        {showMenu ? 'X' : 'Mostrar Menú'}
      </Button>
      
      <Grid container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 12, sm: 12, md: 12 }}>
        {showMenu && (
          <Grid size={6}>
            <Box sx={{ bgcolor: 'primary.main',
              color: 'primary.contrastText',
              p: 2,
              textAlign: 'center', }}>
              menu informativo
              <Grid size={12}>

                <Box sx={{ bgcolor: 'secondary.main',
                  color: 'secondary.contrastText',
                  p: 2,
                  textAlign: 'center',}}>
                    Grafico
                </Box>

                <Box sx={{ bgcolor: 'secondary.main',
                  color: 'secondary.contrastText',
                  p: 2,
                  textAlign: 'center',}}>
                    Datos
                </Box>

              </Grid>
            </Box>
          </Grid>
        )}
        
        <Grid size={showMenu ? 6 : 12}>
          <Box sx={{ bgcolor: 'secondary.main',
              color: 'secondary.contrastText',
              p: 2,
              textAlign: 'center',}}>
                 Mapa
                 <RasterMap />
            </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

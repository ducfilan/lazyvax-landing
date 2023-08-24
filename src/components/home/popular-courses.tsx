import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { useTheme } from '@mui/material/styles'
import { Typography } from '@mui/material'

import { ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax'

const HomePopularCourse: FC = () => {
  return (
    <Box
      id="work-demo"
      sx={{
        display: { xs: 'none', md: 'block' },
        pt: {
          xs: 6,
          md: 8,
        },
        pb: 14,
        backgroundColor: '#c0eaf8',
        paddingBottom: 0,
      }}
    >
      <Grid container spacing={2}>
        <ParallaxProvider>
          <ParallaxBanner
            style={{
              height: 1000,
            }}
            layers={[
              {
                image: '/images/bg-1.jpg',
                translateY: [0, 50],
                scale: [1.05, 1, 'easeOutCubic'],
                shouldAlwaysCompleteAnimation: true,
                expanded: false,
              },
              {
                translateY: [5, 50],
                scale: [1, 1.5, 'easeOutCubic'],
                opacity: [0.2, 2],
                shouldAlwaysCompleteAnimation: true,
                expanded: false,
                children: (
                  <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                    <Typography
                      component="h2"
                      sx={{
                        position: 'relative',
                        fontSize: { xs: 40, md: 72 },
                        letterSpacing: 1.5,
                        fontWeight: 'bold',
                        textTransform: 'uppercase',
                        lineHeight: 1.3,
                        color: '#1668dc',
                      }}
                    >
                      Let the magic happens
                    </Typography>
                  </div>
                ),
              },
              {
                image: '/images/screenshots/screenshot-pc.png',
                translateY: [20, -10],
                scale: [0.9, 0.9],
                shouldAlwaysCompleteAnimation: true,
                expanded: false,
              },
            ]}
          />
        </ParallaxProvider>
      </Grid>
    </Box>
  )
}

export default HomePopularCourse

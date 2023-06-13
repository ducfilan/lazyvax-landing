import React, { FC } from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import { Link as ScrollLink } from 'react-scroll'
import { StyledButton } from '@/components/styled-button'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import YouTube, { YouTubeProps } from 'react-youtube'
import StoreImg from '../logo/store'

const storeImages = {
  iOS: 'http://linkmaker.itunes.apple.com/images/badges/en-us/badge_appstore-lrg.svg',
  android: 'https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg',
  chrome: 'https://upload.wikimedia.org/wikipedia/commons/e/e1/Google_Chrome_icon_%28February_2022%29.svg',
  edge: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Edge_Logo_2019.svg',
  firefox: 'https://upload.wikimedia.org/wikipedia/commons/2/28/Firefox_logo%2C_2017.svg',
}

const HomeHero: FC = () => {
  const [showVideoModalOpen, setShowVideoModalOpen] = React.useState(false)

  return (
    <Box id="hero" sx={{ backgroundColor: 'background.paper', position: 'relative', pt: 4, pb: { xs: 8, md: 10 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={0} sx={{ flexDirection: { xs: 'column', md: 'unset' } }}>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                textAlign: { xs: 'center', md: 'left' },
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <Box sx={{ mb: 3 }}>
                <Typography
                  component="h2"
                  sx={{
                    position: 'relative',
                    fontSize: { xs: 40, md: 72 },
                    letterSpacing: 1.5,
                    fontWeight: 'bold',
                    lineHeight: 1.3,
                  }}
                >
                  <Typography
                    component="mark"
                    sx={{
                      position: 'relative',
                      color: 'primary.main',
                      fontSize: 'inherit',
                      fontWeight: 'inherit',
                      backgroundColor: 'unset',
                    }}
                  >
                    Better{' '}
                    <Box
                      sx={{
                        position: 'absolute',
                        top: { xs: 24, md: 34 },
                        left: 2,
                        transform: 'rotate(3deg)',
                        '& img': { width: { xs: 146, md: 210 }, height: 'auto' },
                      }}
                    >
                      {/* eslint-disable-next-line */}
                      <img src="/images/headline-curve.svg" alt="Headline curve" />
                    </Box>
                  </Typography>
                  <Typography
                    component="span"
                    sx={{
                      fontSize: 'inherit',
                      fontWeight: 'inherit',
                      position: 'relative',
                      '& svg': {
                        position: 'absolute',
                        top: -16,
                        right: -21,
                        width: { xs: 22, md: 30 },
                        height: 'auto',
                      },
                    }}
                  >
                    Planning
                    <svg version="1.1" viewBox="0 0 3183 3072">
                      <g id="Layer_x0020_1">
                        <path
                          fill="#1668dc"
                          d="M2600 224c0,0 0,0 0,0 236,198 259,562 52,809 -254,303 -1849,2089 -2221,1776 -301,-190 917,-1964 1363,-2496 207,-247 570,-287 806,-89z"
                        />
                        <path
                          fill="#1668dc"
                          d="M3166 2190c0,0 0,0 0,0 64,210 -58,443 -270,516 -260,90 -1848,585 -1948,252 -104,-230 1262,-860 1718,-1018 212,-73 437,39 500,250z"
                        />
                        <path
                          fill="#1668dc"
                          d="M566 3c0,0 0,0 0,0 -219,-26 -427,134 -462,356 -44,271 -255,1921 90,1962 245,62 628,-1392 704,-1869 36,-221 -114,-424 -332,-449z"
                        />
                      </g>
                    </svg>
                  </Typography>{' '}
                  <br />
                  and Execution!
                </Typography>
              </Box>
              <Box sx={{ mb: 4, width: { xs: '100%', md: '70%' } }}>
                <Typography sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                  {
                    'Utilizing generative AI tailored to your individual preferences, Lazyvax expertly crafts a tailored schedule just for you. More than that, it helps you stick to your plan by stepping in when you get distracted. I believe you can do better.'
                  }
                </Typography>
              </Box>
              <Box sx={{ '& button': { mr: 2 } }}>
                <ScrollLink to="popular-course" spy={true} smooth={true} offset={0} duration={350}>
                  <StyledButton color="primary" size="large" variant="contained">
                    Get Started
                  </StyledButton>
                </ScrollLink>
                <ScrollLink to="video-section" spy={true} smooth={true} offset={0} duration={350}>
                  <StyledButton
                    color="primary"
                    size="large"
                    variant="outlined"
                    startIcon={<PlayArrowIcon />}
                    onClick={() => setShowVideoModalOpen(true)}
                  >
                    Watch Video
                  </StyledButton>
                  <Modal
                    open={showVideoModalOpen}
                    onClose={() => setShowVideoModalOpen(false)}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box
                      sx={{
                        position: 'absolute' as const,
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                        padding: '6px 6px 0',
                      }}
                    >
                      <YouTube
                        videoId="dgT9gRoJY20"
                        opts={
                          {
                            width: '1065',
                            height: '600',
                            playerVars: {
                              modestbranding: 1,
                              rel: 0,
                              autoplay: 1,
                            },
                          } as YouTubeProps['opts']
                        }
                      />
                    </Box>
                  </Modal>
                </ScrollLink>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} sx={{ position: 'relative' }}>
            {/* Certificate badge */}
            <Box
              sx={{
                position: 'absolute',
                bottom: 30,
                left: { xs: 0, md: -150 },
                boxShadow: 1,
                borderRadius: 3,
                px: 2,
                py: 1.4,
                zIndex: 1,
                backgroundColor: 'background.paper',
                display: 'flex',
                alignItems: 'flex-start',
                width: 280,
              }}
            >
              <Box
                sx={{
                  boxShadow: 1,
                  borderRadius: '50%',
                  width: 44,
                  height: 44,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mr: 2,
                  '& img': { width: '32px !important', height: 'auto' },
                }}
              >
                <Image src="/images/certificate.png" alt="Certificate icon" width={50} height={50} quality={97} />
              </Box>
              <Box>
                <Typography
                  component="h6"
                  sx={{ color: 'secondary.main', fontSize: '1.1rem', fontWeight: 700, mb: 0.5 }}
                >
                  Time
                </Typography>
                <Typography variant="subtitle1" sx={{ color: 'text.secondary', lineHeight: 1.3 }}>
                  Most of our time is on the Internet, but we don’t use it efficiently
                </Typography>
              </Box>
            </Box>
            <Box sx={{ lineHeight: 0 }}>
              <Image src="/images/home-check.png" width={775} height={787} alt="Check list" />
            </Box>
          </Grid>
        </Grid>

        {/* Experience */}
        <Box
          sx={{
            boxShadow: '20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff;',
            py: 4,
            px: 7,
            borderRadius: 4,
            marginTop: 3,
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} md={3}>
              <StoreImg imgUrl={storeImages.chrome} targetUrl={''} title="Chrome Extension" />
            </Grid>
            <Grid item xs={12} md={3}>
              <StoreImg imgUrl={storeImages.edge} targetUrl={''} title="Edge Extension" />
            </Grid>
            <Grid item xs={12} md={3}>
              <StoreImg imgUrl={storeImages.iOS} targetUrl={''} />
            </Grid>
            <Grid item xs={12} md={3}>
              <StoreImg imgUrl={storeImages.android} targetUrl={''} />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  )
}

export default HomeHero

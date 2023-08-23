import React, { FC } from 'react'
import Box from '@mui/material/Box'
import { StyledButton } from '@/components/styled-button'

const AuthNavigation: FC = () => {
  return (
    <Box sx={{ '& button:first-child': { mr: 2 } }}>
      <StyledButton
        disableHoverEffect={true}
        variant="outlined"
        onClick={() => {
          window.location.href = 'https://app.lazyvax.com'
        }}
      >
        Sign In
      </StyledButton>
      <StyledButton
        disableHoverEffect={true}
        onClick={() => {
          window.location.href = 'https://app.lazyvax.com'
        }}
      >
        Sign Up
      </StyledButton>
    </Box>
  )
}

export default AuthNavigation

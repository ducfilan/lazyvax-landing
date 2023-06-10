import React, { FC } from 'react'
import { Box } from '@mui/material'
import Image from 'next/image'

interface Props {
  onClick?: () => void
  variant?: 'primary' | 'secondary'
}

const Logo: FC<Props> = ({ onClick, variant }) => {
  return (
    <Box onClick={onClick} style={{ marginTop: 12 }}>
      <Image src="/images/logo dark.png" alt="Lazyvax logo" width={186} height={40} />
    </Box>
  )
}

Logo.defaultProps = {
  variant: 'primary',
}

export default Logo

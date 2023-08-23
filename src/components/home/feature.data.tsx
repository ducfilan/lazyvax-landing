import React, { ReactNode } from 'react'
import ArtTrackIcon from '@mui/icons-material/ArtTrack'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary'
import ContactSupportIcon from '@mui/icons-material/ContactSupport'

interface Data {
  title: string
  description: string
  icon?: ReactNode
}

export const data: Data[] = [
  {
    title: 'Share your info',
    description: 'Utilizing generative AI tailored to your individual preferences',
    icon: <ArtTrackIcon />,
  },
  {
    title: 'State what you want',
    description: 'Lazyvax expertly crafts a tailored plan just for you!',
    icon: <AttachMoneyIcon />,
  },
  {
    title: 'Make every step counts',
    description: 'Follow suggested steps, adjust schedule and priorities as needed',
    icon: <LocalLibraryIcon />,
  },
  {
    title: 'Prevent distractions',
    description: 'Lazyvax intervenes when you over-use distractions',
    icon: <ContactSupportIcon />,
  },
]

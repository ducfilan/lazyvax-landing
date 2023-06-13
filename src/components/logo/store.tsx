import React, { FC } from 'react'

interface Props {
  imgUrl: string
  targetUrl: string
  title?: string
  width?: number
  height?: number
}

const StoreImg: FC<Props> = ({ imgUrl, targetUrl, title, width, height }) => {
  const aStyle = {
    display: 'inline-block',
    overflow: 'hidden',
    background: 'url(' + imgUrl + ') no-repeat',
    backgroundSize: 'contain',
    width: '100%',
    height: '100%',
    ...(title
      ? { textDecoration: 'none', padding: '4px 0px 4px 35px', color: '#717171' }
      : { width: width || 182, height: height || 53 }),
  }

  return (
    <div
      style={
        title
          ? {
              margin: '0 auto',
              border: '1px solid #ccc',
              boxShadow: '0px 0px 2px #ccc',
              borderRadius: 5,
              width: width || 182,
              height: height || 53,
              padding: 10,
            }
          : { textAlign: 'center' }
      }
    >
      <a style={aStyle} href={targetUrl}>
        {title || ''}
      </a>
    </div>
  )
}

export default StoreImg

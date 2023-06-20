import React from 'react'

const Link = ({ children, url, }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  )
}

export default Link
import React from 'react'

export const Footer: React.FC = () => {
  const year: number = new Date().getFullYear();

  return (
    <footer className='text-center'>
      <a href='https://whitforddesign.ca/' title="whitforddesign.ca">&copy; Whitford Design {year}</a>
    </footer>
  )
}

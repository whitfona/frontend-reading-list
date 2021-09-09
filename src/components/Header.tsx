import React from 'react'

export const Header: React.FC<{ title: string }> = ({ title }) => {
  return (
    <header className='text-center'>
      <h1>{title}</h1>
      <p>Keep track of your reading list</p>
    </header>
  )
}

import Navbar from '@/components/Navbar'
import React, { PropsWithChildren } from 'react'

const HomeLayout = ({children}: PropsWithChildren) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  )
}

export default HomeLayout
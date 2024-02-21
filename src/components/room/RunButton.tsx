import { PlayIcon } from '@radix-ui/react-icons'
import React from 'react'
import { Button } from '../ui/button'

const RunButton = () => {
  return (
    <Button variant='secondary' className='flex items-center space-x-2'>
      <PlayIcon className='h-6 w-6'/>
			<p>Run</p>
    </Button>
  )
}

export default RunButton
import React from 'react'
import RunButton from './RunButton'
import LanguageSelector from './editors/LanguageSelector'

const EditorToolbar = () => {
  return (
    <div className='w-full h-[3rem] my-2 flex items-center justify-center'>
        <div className='flex items-center space-x-4'>
            <RunButton />
            <LanguageSelector />
        </div>
    </div>
  )
}

export default EditorToolbar
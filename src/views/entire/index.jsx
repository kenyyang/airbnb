import React, { memo } from 'react'
import { EntireWrapper } from './style'

const Entire = memo(() => {
  return (
    <EntireWrapper>
      <div className='filter'>filter-section</div>
      <div className='rooms'>rooms-filter</div>
      <div className='pagination'>pagination-filter</div>
    </EntireWrapper>
  )
})

export default Entire
import React, { memo } from 'react'

import IconLogo from '@/assets/svg/icon-logo'
import { LeftWrapper } from './style'
import { useNavigate } from 'react-router-dom'

const HeaderLeft = memo(() => {

  const navigate = useNavigate()
  function goHomeClick() {
    navigate('/home')
  }
  return (
    <LeftWrapper>
      <div className='logo' onClick={goHomeClick}>
        <IconLogo />
      </div>
    </LeftWrapper>
  )
})

export default HeaderLeft
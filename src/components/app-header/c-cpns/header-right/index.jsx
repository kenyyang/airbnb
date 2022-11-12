import React, { memo } from 'react'

import { RightWrapper } from './style'
import IconGlobal from '@/assets/svg/icon-global'
import IconMenu from '@/assets/svg/icon-menu'
import IconAvatar from '@/assets/svg/icon-avatar'

const HeaderRight = memo(() => {
  return (
    <RightWrapper>
      <div className='btns'>
        <span className='btn'>登陆</span>
        <span className='btn'>注册</span>
        <span className='btn'>
          <IconGlobal />
        </span>
      </div>
      <div className='profile'>
        <IconMenu />
        <IconAvatar />
      </div>
    </RightWrapper>
  )
})

export default HeaderRight
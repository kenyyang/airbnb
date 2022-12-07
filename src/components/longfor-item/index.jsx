import React, { memo } from 'react'
import { LongforItemWrapper } from './style'

const LongforItem = memo((props) => {
    const { itemInfo } = props
    return (
        <LongforItemWrapper>
            <div className='inner'>
                <div className='item-info'>
                    <img className='cover' src={itemInfo.picture_url} alt="" />
                    <div className='bg-cover'></div>
                    <div className='info'>
                        <div className='city'>{itemInfo.city}</div>
                        <div className='price'>均价 {itemInfo.price}</div>
                    </div>
                </div>
            </div>
        </LongforItemWrapper>
    )
})

export default LongforItem
import React, { memo } from 'react'
import RoomItem from '@/components/room-item'
import { SectionWrapper } from './style'

const SectionRooms = memo((props) => {
    const { goodPriceInfo } = props
    return (
        <SectionWrapper>
            {
                goodPriceInfo.list?.slice(0, 8).map(item => {
                    return <RoomItem itemData={item} key={item.id} />
                })
            }
        </SectionWrapper>
    )
})

export default SectionRooms
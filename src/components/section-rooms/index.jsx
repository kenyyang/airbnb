import React, { memo } from 'react'
import RoomItem from '@/components/room-item'
import PropTypes from 'prop-types'
import { SectionWrapper } from './style'

const SectionRooms = memo((props) => {
    const { roomList = [], itemWidth } = props
    return (
        <SectionWrapper>
            {
                roomList.slice(0, 8)?.map(item => {
                    return <RoomItem itemData={item} key={item.id} itemWidth={itemWidth} />
                })
            }
        </SectionWrapper>
    )
})
SectionRooms.propTypes = {
    roomList: PropTypes.array
}

export default SectionRooms
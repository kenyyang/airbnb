import React, { memo } from 'react'
import { SectionV1Wrapper } from './style'

import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'

const HomeSection = memo((props) => {
    const { infoData } = props
    return (
        <SectionV1Wrapper>
            <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
            <SectionRooms roomList={infoData.list} itemWidth="25%" />
        </SectionV1Wrapper>
    )
})

export default HomeSection
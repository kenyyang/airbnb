import PropTypes from 'prop-types'
import React, { memo, useCallback, useState } from 'react'

import { SectionV2Wrapper } from './style'
import SectionHeader from '@/components/section-header'
import SectionTabs from '@/components/section-tabs'
import SectionRooms from '@/components/section-rooms'
import SectionFooter from '@/components/section-footer'

const HomeSectionV2 = memo((props) => {
    const { infoData } = props
    //获取初始城市名字
    const initialName = infoData.dest_address?.[0].name
    const [name, setName] = useState(initialName)

    // tab数据转换
    const tabNames = infoData.dest_address?.map(item => item.name)
    //事件处理函数
    const tabClickHandle = useCallback(function (index, item) {
        setName(item);
    }, [])

    return (
        <SectionV2Wrapper>
            <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
            <SectionTabs tabNames={tabNames} tabClick={tabClickHandle} />
            <SectionRooms roomList={infoData.dest_list?.[name]} itemWidth={"33.33333%"} />
            <SectionFooter name={name} />
        </SectionV2Wrapper>
    )
})

HomeSectionV2.propTypes = {
    infoData: PropTypes.object
}

export default HomeSectionV2
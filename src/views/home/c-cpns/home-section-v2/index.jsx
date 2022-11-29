import PropTypes from 'prop-types'
import React, { memo, useCallback, useState } from 'react'

import { SectionV2Wrapper } from './style'
import SectionHeader from '@/components/section-header'
import SectionTabs from '@/components/section-tabs'
import SectionRooms from '@/components/section-rooms'

const HomeSectionV2 = memo((props) => {
    const { discountInfo } = props
    //获取初始城市名字
    const initialName =discountInfo.dest_address?.[0].name
    const [name, setName] = useState(initialName)

    // tab数据转换
    const tabNames = discountInfo.dest_address?.map(item => item.name)
    //事件处理函数
    const tabClickHandle = useCallback(function (index, item) {
        setName(item);
    }, [])

    return (
        <SectionV2Wrapper>
            <SectionHeader title={discountInfo.title} subtitle={discountInfo.subtitle} />
            <SectionTabs tabNames={tabNames} tabClick={tabClickHandle} />
            <SectionRooms roomList={discountInfo.dest_list?.[name]} itemWidth={"33.33333%"} />
        </SectionV2Wrapper>
    )
})

HomeSectionV2.propTypes = {
    discountInfo: PropTypes.object
}

export default HomeSectionV2
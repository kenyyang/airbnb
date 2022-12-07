import ScrollView from '@/base-ui/scroll-view'
import LongforItem from '@/components/longfor-item'
import SectionHeader from '@/components/section-header'
import React, { memo } from 'react'
import { LongforWrapper } from './style'

const HomeLongFor = memo((props) => {
    const { infoData } = props
    return (
        <LongforWrapper>
            <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
            <div className=' longfor-list'>
                <ScrollView>
                    {
                        infoData.list.map(item => {
                            return <LongforItem itemInfo={item} key={item.city} />
                        })
                    }
                </ScrollView>
            </div>
        </LongforWrapper>
    )
})

export default HomeLongFor
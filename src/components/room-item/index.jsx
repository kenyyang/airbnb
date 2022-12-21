import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import { ItemWrapper } from './style'
import Rating from '@mui/material/Rating';
import { Carousel } from 'antd';
import IconArrowLeft from '@/assets/svg/icon-arrow-left';
import IconArrowRight from '@/assets/svg/icon-arrow-right';
import { useRef } from 'react';
import Indicator from '@/base-ui/indicator';
import classNames from 'classnames';

const RoomItem = memo((props) => {
    const { itemData, itemWidth = "25%", itemClick } = props
    // const { buttonColor } = props.theme.color
    const [selectIndex, setSelectIndex] = useState(0)

    const slideRef = useRef()
    const pictureEl = (
        <div className='cover'>
            <img src={itemData.picture_url} alt="" />
        </div>
    )
    const slideEl = (
        <div className="slide">
            <div className="control">
                <div className='btn left' onClick={e => controlClickHandle(false, e)}>
                    <IconArrowLeft width="30" height="30" />
                </div>
                <div className='btn right' onClick={e => controlClickHandle(true, e)}>
                    <IconArrowRight width="30" height="30" />
                </div>
            </div>
            <div className="indicator">
                <Indicator selectIndex={selectIndex}>
                    {
                        itemData?.picture_urls?.map((item, index) => {
                            return (
                                <div className='dot-item' key={item}>
                                    <span className={classNames('dot', { active: selectIndex === index })}></span>
                                </div>
                            )
                        })
                    }
                </Indicator>
            </div>
            <Carousel dots={false} ref={slideRef} >
                {
                    itemData?.picture_urls?.map(item => {
                        return (
                            <div className='cover' key={item}>
                                <img src={item} alt="" />
                            </div>
                        )
                    })
                }
            </Carousel>
        </div>
    )

    function controlClickHandle(isRight = true, event) {

        isRight ? slideRef.current.next() : slideRef.current.prev()
        // 最新的索引
        let newIndex = isRight ? selectIndex + 1 : selectIndex - 1
        const length = itemData.picture_urls.length
        if (newIndex < 0) newIndex = length - 1
        if (newIndex > length - 1) newIndex = 0
        setSelectIndex(newIndex)

        // 阻止事件冒泡
        event.stopPropagation()
    }
    function itemClickHandle() {
        if (itemClick) itemClick()
    }

    return (
        <ItemWrapper
            verifyColor={itemData?.verify_info?.text_color || "#39576a"}
            itemWidth={itemWidth}
            onClick={itemClickHandle}
        >
            <div className='inner'>
                {!itemData.picture_urls ? pictureEl : slideEl}
                <div className='desc'>{itemData.verify_info.messages.join(" . ")}</div>
                <div className='name'>{itemData.name}</div>
                <div className='price'>￥{itemData.price}/晚</div>
                <div className='bottom'>
                    <Rating
                        value={itemData.star_rating ?? 5}
                        precision={0.1}
                        readOnly
                        sx={{ fontSize: "12px", color: "#00848A" }}
                    />
                    <span className='count'>{itemData.reviews_count}</span>
                    {
                        itemData.bottom_info && <span className='extra'>·{itemData.bottom_info?.content}</span>
                    }
                </div>
            </div >
        </ItemWrapper >
    )
})

RoomItem.propTypes = {
    itemData: PropTypes.object
}

export default RoomItem
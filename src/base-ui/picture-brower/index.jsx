import React, { memo, useEffect, useState } from 'react'
import { CSSTransition, SwitchTransition } from "react-transition-group"

import { PictureBrowerWrapper } from './style'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import IconClose from '@/assets/svg/icon-close'
import IconTriangleBottom from '@/assets/svg/icon-triangle-bottom'
import IconTriangleTop from '@/assets/svg/icon-triangle-top'
import Indicator from '../indicator'
import classNames from 'classnames'

const PictureBrower = memo((props) => {

    const { pictureUrls, closeClick } = props
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isNext, setIsNext] = useState(true)
    const [showList, setShowList] = useState(true)

    // 当图片浏览器展示出来时，让滚动的功能消失
    useEffect(() => {
        document.body.style.overflow = "hidden"
        return () => {
            document.body.style.overflow = "auto"
        }
    }, [])

    // 事件监听逻辑
    function closeBtnClickHandle() {
        if (closeClick) closeClick()
    }
    function changeBtnClickHandle(isRight) {
        let newIndex
        if (isRight) {
            newIndex = (currentIndex === pictureUrls.length - 1 ? 0 : currentIndex + 1)
        } else {
            newIndex = (currentIndex === 0 ? pictureUrls.length - 1 : currentIndex - 1)
        }
        setCurrentIndex(newIndex)
        setIsNext(isRight)
    }

    return (
        <PictureBrowerWrapper isNext={isNext} showList={showList} >
            <div className="top">
                <div className='close-btn' onClick={closeBtnClickHandle}>
                    <IconClose />
                </div>
            </div>
            <div className="slide">
                <div className="control">
                    <div className="btn left" onClick={e => changeBtnClickHandle(false)}>
                        <IconArrowLeft width="77" height="77" />
                    </div>
                    <div className="btn right" onClick={e => changeBtnClickHandle(true)}>
                        <IconArrowRight width="77" height="77" />
                    </div>
                </div>
                <div className="picture">
                    <SwitchTransition mode='in-out'>
                        <CSSTransition
                            key={pictureUrls[currentIndex]}
                            classNames="pic"
                            timeout={150}
                        >
                            <img src={pictureUrls[currentIndex]} alt="" />
                        </CSSTransition>
                    </SwitchTransition>
                </div>
            </div>
            <div className="preview">
                <div className="info">
                    <div className="desc">
                        <div className="count">
                            <span>{currentIndex + 1}/{pictureUrls.length}：</span>
                            <span>room apartment 图片{currentIndex + 1}</span>
                        </div>
                        <div className="toggle" onClick={e => setShowList(!showList)}>
                            <span>{showList ? "隐藏" : "显示"}图片列表</span>
                            {showList ? <IconTriangleBottom /> : <IconTriangleTop />}
                        </div>
                    </div>
                    <div className="list">
                        <Indicator selectIndex={currentIndex} >
                            {
                                pictureUrls.map((item, index) => {
                                    return (
                                        <div
                                            className={classNames("item", { active: currentIndex === index })}
                                            key={item}
                                            onClick={e => setCurrentIndex(index)}
                                        >
                                            <img src={item} alt="" />
                                        </div>
                                    )
                                })
                            }
                        </Indicator>
                    </div>
                </div>
            </div>
        </PictureBrowerWrapper>
    )
})

export default PictureBrower
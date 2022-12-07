import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import React, { memo, useEffect, useRef, useState } from 'react'
import { ScollViewWrapper } from './style'

const ScrollView = memo((props) => {

    const [showLeft, setShowLeft] = useState(false)
    const [showRight, setShowRight] = useState(false)
    const [posIndex, setPosIndex] = useState(0)
    const totalDisanceRef = useRef()

    /** 组件渲染完成之后，判断右边按钮是否渲染 */
    const scrollContentRef = useRef()
    useEffect(() => {
        const scrollWidth = scrollContentRef.current.scrollWidth // 一共可以滚动的宽度
        const clientWidth = scrollContentRef.current.clientWidth // 本身占据的宽度
        const totalDistance = scrollWidth - clientWidth
        totalDisanceRef.current = totalDistance
        setShowRight(totalDistance > 0)
    }, [props.children])

    /*** 事件处理的逻辑 */

    function controlClickHandle(isRight) {
        const newIndex = isRight ? posIndex + 1 : posIndex - 1
        const newEl = scrollContentRef.current.children[newIndex]
        scrollContentRef.current.style.transform = `translate(-${newEl.offsetLeft}px)`
        setPosIndex(newIndex)

        //判断是否继续显示按钮
        setShowRight(totalDisanceRef.current > newEl.offsetLeft)
        setShowLeft(newEl.offsetLeft > 0)
    }

    return (
        <ScollViewWrapper>
            {showLeft && (
                <div
                    className='control left'
                    onClick={e => controlClickHandle(false)}
                >
                    <IconArrowLeft />
                </div>
            )}
            {showRight && (
                <div
                    className='control right'
                    onClick={e => controlClickHandle(true)}
                >
                    <IconArrowRight />
                </div>
            )}
            <div className='scroll'>
                <div className='scroll-content' ref={scrollContentRef}>
                    {props.children}
                </div>
            </div>
        </ScollViewWrapper>
    )
})


export default ScrollView
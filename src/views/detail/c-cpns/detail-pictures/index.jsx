import PictureBrower from '@/base-ui/picture-brower'
import React, { memo, useState } from 'react'
import { shallowEqual, useSelector } from 'react-redux'

import { DetailPicturesWrapper } from './style'
const DetailPictures = memo(() => {

    // 定义组件内部状态
    const [showBrower, setShowBrower] = useState(false)

    // 从redux中获取数据
    const { detailInfo } = useSelector(state => ({
        detailInfo: state.detail.detailInfo
    }), shallowEqual)
    return (
        <DetailPicturesWrapper>
            <div className="pictures" onClick={e => setShowBrower(true)}>
                <div className="left">
                    <div className="item">
                        <img src={detailInfo?.picture_urls?.[0]} alt="" />
                        <div className="cover"></div>
                    </div>
                </div>
                <div className="right">
                    {
                        detailInfo?.picture_urls?.slice(1, 5).map(item => {
                            return (
                                <div className="item" key={item}>
                                    <img src={item} alt="" />
                                    <div className="cover"></div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="show-btn" onClick={e => setShowBrower(true)}>查看照片</div>
            {
                showBrower && <PictureBrower
                    pictureUrls={detailInfo.picture_urls}
                    closeClick={e => setShowBrower(false)}
                />
            }
        </DetailPicturesWrapper>
    )
})

export default DetailPictures
import React, { memo, useCallback } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { EntireRoomsWrapper } from './style'
import RoomItem from '@/components/room-item'
import { useNavigate } from 'react-router-dom'
import { changeDetailInfoAction } from '@/store/modules/detail'

const EntireRooms = memo(() => {

    const { roomList, totalCount, isLoading } = useSelector(state => ({
        roomList: state.entire.roomList,
        totalCount: state.entire.totalCount,
        isLoading: state.entire.isLoading
    }), shallowEqual)

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const itemClickHandle = useCallback((item) => {
        console.log(item);
        dispatch(changeDetailInfoAction(item))
        navigate('/detail')
    }, [navigate, dispatch])

    return (
        <EntireRoomsWrapper>
            <h1 className='title'>共{totalCount}多处住所</h1>
            <div className="list">
                {
                    roomList.map(item => {
                        return <RoomItem
                            itemData={item}
                            itemWidth="20%"
                            key={item._id}
                            itemClick={e => itemClickHandle(item)}
                        />
                    })
                }
            </div>

            {isLoading && <div className="cover"></div>}
        </EntireRoomsWrapper>
    )
})

export default EntireRooms
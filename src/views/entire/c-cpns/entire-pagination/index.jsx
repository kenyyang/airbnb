import React, { memo } from 'react'
import { EntirePaginationWrapper } from './style'
import Pagination from '@mui/material/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { changeIsLoadingAction, fetchRoomListAction } from '@/store/modules/entire/actionCreators';

const EntirePagination = memo(() => {

    const { totalCount, currentPage, roomList } = useSelector(state => ({
        totalCount: state.entire.totalCount,
        currentPage: state.entire.currentPage,
        roomList: state.entire.roomList
    }))

    const dispatch = useDispatch()
    function pageChangeHandle(event, pageCount) {
        // 回到顶部
        window.scrollTo(0, 0)

        dispatch(changeIsLoadingAction(true))

        dispatch(fetchRoomListAction(pageCount - 1))
        dispatch(changeIsLoadingAction(false))
    }
    return (
        <EntirePaginationWrapper>
            {
                !!roomList.length && (
                    <div className='info'>
                        <Pagination count={Math.ceil(totalCount / 20)} onChange={pageChangeHandle} />
                        <div className="desc">
                            第{1 + currentPage * 20}到{(currentPage + 1) * 20}个房源，共超过{totalCount}个
                        </div>
                    </div>
                )
            }

        </EntirePaginationWrapper>
    )
})

export default EntirePagination
import { getEntireRoomList } from '@/services/modules/entire'
import * as actionTypes from './constants'

export const changeCurrentPageAction = (currentPage) => ({
    type: actionTypes.CHANGE_CURRENT_PAGE,
    currentPage
})

export const changeRoomListAction = roomList => ({
    type: actionTypes.CHANGE_ROOM_LIST,
    roomList
})
export const changeTotalCountAction = totalCount => ({
    type: actionTypes.CHANGE_TOTAL_COUNT,
    totalCount
})

export const changeIsLoadingAction = (isLoading) => ({
    type: actionTypes.CAHNGE_IS_LOADING,
    isLoading
})

export const fetchRoomListAction = (page = 0) => {
    return async (dispatch) => {
        // 根据页码获取最新的数据
        // const currentPage = getState().entire.currentPage
        // 更新最新的页码
        dispatch(changeCurrentPageAction(page - 1)) //redux中从0开始，所以要减1

        const res = await getEntireRoomList(page * 20);
        // 获取到最新的数据，保存在redux中
        const roomList = res.list
        const totalCount = res.totalCount
        dispatch(changeRoomListAction(roomList))
        dispatch(changeTotalCountAction(totalCount))
    }
}
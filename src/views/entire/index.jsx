import React, { memo } from 'react'
import { EntireWrapper } from './style'
import EntireFilter from './c-cpns/entire-filter'
import EntireRooms from './c-cpns/entire-rooms'
import EntirePagination from './c-cpns/entire-pagination'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchRoomListAction } from '@/store/modules/entire/actionCreators'

const Entire = memo(() => {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchRoomListAction())
  }, [dispatch])
  return (
    <EntireWrapper>
      <EntireFilter className='filter' />
      <EntireRooms className='rooms' />
      <EntirePagination className='pagination' />
    </EntireWrapper>
  )
})

export default Entire
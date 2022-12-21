import React, { memo, useState } from 'react'
import { EntireFilterWrapper } from './style'
import filterData from '@/assets/data/filter_data.json'
import classNames from 'classnames'

const EntireFilter = memo(() => {
    const [selectItems, setSelectItems] = useState([])

    function itemClickHandle(item) {
        const newItems = [...selectItems]
        if (newItems.includes(item)) {
            const filterIndex = newItems.findIndex(filterItem => filterItem === item)
            newItems.splice(filterIndex, 1)
        } else {
            newItems.push(item)
        }

        setSelectItems(newItems)
    }
    return (
        <EntireFilterWrapper>
            <div className="filter">
                {
                    filterData.map((item, index) => {
                        return (
                            <div className={classNames("item", { active: selectItems.includes(item) })}
                                key={index}
                                onClick={e => itemClickHandle(item)}
                            >
                                {item}
                            </div>
                        )
                    })
                }
            </div>
        </EntireFilterWrapper>
    )
})

export default EntireFilter
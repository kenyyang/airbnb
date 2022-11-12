import React, { memo } from 'react'
import { useRoutes } from 'react-router-dom'

import routes from '@/router'
import AppHeader from '@/components/app-header'
import AppFooter from '@/components/app-footer'

const APP = memo(() => {
    return (
        <div className='app'>
            <AppHeader />
            <div className='pages'>
                {useRoutes(routes)}
            </div>
            <AppFooter />
        </div>
    )
})

export default APP
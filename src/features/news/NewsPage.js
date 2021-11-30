import { LayOut } from 'features/common'
import React from 'react'
import NewsTable from './NewsTable'

export default function NewsPage(){
    return(
        <div>       
            <LayOut>
            <text align="center"><h1><b>코로나19 관련 뉴스</b></h1></text>
            {/* searchbox on top */}
            <NewsTable/>
            {/* number of rows/info + page arrowss */}
            </LayOut>
        </div>
    )
}
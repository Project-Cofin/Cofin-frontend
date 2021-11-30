import { LayOut } from 'features/common'
import React from 'react'
import MedptTable from './MedptTable'

export default function MedptPage(){
    return(
        <div>      
            <LayOut> 
            <text align="center"><h1><b>지역별 선별 진료소 정보</b></h1></text>
            {/* searchbox on top */}
            <MedptTable/>
            {/* number of rows/info + page arrowss */}
            </LayOut>
        </div>
    )
}
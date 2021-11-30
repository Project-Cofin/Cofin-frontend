
import React from 'react'
import MsgTable from 'features/message/components/MsgTable'
import { LayOut } from 'features/common'

export default function MsgPage(){
    return(
        <LayOut>
            <div>       
                
                <text align="center"><h1><b>재난문자</b></h1></text>
                {/* searchbox on top */}
                <MsgTable/>
                {/* number of rows/info + page arrowss */}
                
            </div>
        </LayOut>
    )
}
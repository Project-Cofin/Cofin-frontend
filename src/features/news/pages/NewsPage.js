import React from 'react'
import NewsTable from 'features/news/components/NewsTable'
import { LayOut } from 'features/common'

export default function NewsPage(){
    return(
        <LayOut>  
        <div align="center" style={{ display: "inline-block" }}>     
        
            <text align="center"><h1><b>코로나19 관련 뉴스</b></h1></text>
            <table style={{width:"1200px", height:"800px", margin:"0 auto", alignItems:'center center'}}>
            <tr style={{width:"100%", height:"15%"}}>                
                    <NewsTable/>                   
            {/* number of rows/info + page arrowss */}
            </tr>
            </table>
            
        </div>
        </LayOut>
    )
}
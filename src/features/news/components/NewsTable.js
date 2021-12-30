import React from 'react'
import { withStyles,makeStyles } from '@material-ui/styles';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
  } from "@material-ui/core";


function createData(id,title,url,pubDate){
    return{id,title,url,pubDate};
}

const rows = [
    createData(1, '전 세계 오미크론 급확산… 정부, 아프리카 11개국 입국금지 연장','https://m.news.naver.com/read?mode=LSD&mid=sec&sid1=102&oid=022&aid=0003652394','세계일보언론사 선정20시간 전'),
    createData(2, '신규확진 5천37명, 이틀 연속 5천명대…위중증 1천145명(종합)','https://m.news.naver.com/read?mode=LSD&mid=sec&sid1=102&oid=001&aid=0012852705','연합뉴스언론사 선정38분 전'),
    createData(1, '전 세계 오미크론 급확산… 정부, 아프리카 11개국 입국금지 연장','https://m.news.naver.com/read?mode=LSD&mid=sec&sid1=102&oid=022&aid=0003652394','세계일보언론사 선정20시간 전'),
    createData(2, '신규확진 5천37명, 이틀 연속 5천명대…위중증 1천145명(종합)','https://m.news.naver.com/read?mode=LSD&mid=sec&sid1=102&oid=001&aid=0012852705','연합뉴스언론사 선정38분 전'),
    createData(1, '전 세계 오미크론 급확산… 정부, 아프리카 11개국 입국금지 연장','https://m.news.naver.com/read?mode=LSD&mid=sec&sid1=102&oid=022&aid=0003652394','세계일보언론사 선정20시간 전'),
    createData(2, '신규확진 5천37명, 이틀 연속 5천명대…위중증 1천145명(종합)','https://m.news.naver.com/read?mode=LSD&mid=sec&sid1=102&oid=001&aid=0012852705','연합뉴스언론사 선정38분 전'),
];

const useStyles = makeStyles({
    table:{
        minWidth:700,
    },
});

export default function MedptTable(){
    const classes = useStyles();
    return (
        <div align="center" style={{ display: "inline-block" }}>
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>index/ <>id</></StyledTableCell>
                        <StyledTableCell>title/ <>title</></StyledTableCell>
                        <StyledTableCell>url/ <>url</></StyledTableCell>
                        <StyledTableCell>pubDate/ <>pubDate</></StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row)=>(
                        <StyledTableRow key={row.id}>
                            <StyledTableCell component ="th" scope="row">{row.id}</StyledTableCell>
                            <StyledTableCell align="center">{row.title}</StyledTableCell>
                            <StyledTableCell align="center">{row.url}</StyledTableCell>
                            <StyledTableCell align="center">{row.pubDate}</StyledTableCell>        
                            
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        </div>
    );
}

const StyledTableCell = withStyles(theme => ({
    head:{
        backgroundColor: '#246DFF', 
        color: 'white',
    },
    body:{
        fontSize: 14,
    },

}))(TableCell);

const StyledTableRow = withStyles(theme=>({
    row: {
        '&:hover':{backgroundColor: 'rgba(33,150,243,0.5'}
    }
}))(TableRow);
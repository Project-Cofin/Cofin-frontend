import { LayOut } from 'features/common';
import React from 'react';
import QnAList from '../components/QnAList';
 
const QnABoardPage = props => {
  return (
    <>
    <LayOut>
      <QnAList/>
    </LayOut>
    </>
  )
}
 
export default QnABoardPage;

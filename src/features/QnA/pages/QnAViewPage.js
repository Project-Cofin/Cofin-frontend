import { ViewLayout } from '..';
import React from 'react';
import QnAComment from 'features/QnA/components/QnAComment';
import QnAView from 'features/QnA/components/QnAView';
 
const QnAViewPage = (props) => {
  return (
    <>
    <ViewLayout>
      <QnAView/>
      <QnAComment/>
    </ViewLayout>
    </>
  )
}
 
export default QnAViewPage;

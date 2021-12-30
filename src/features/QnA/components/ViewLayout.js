import * as React from 'react';
import Header from 'features/common/components/Header'
import Footer from 'features/common/components/Footer'
import QnAComment from 'features/QnA/components/QnAComment';
import QnAView from 'features/QnA/components/QnAView';
import 'features/QnA/style/QnAViewLayout.css'

const ViewLayout = (props) => {
  return (
    <div class = "viewwrapper">
      <div class="viewcontainer">
        <span className="header"><Header/></span> 
          <span class ="viewmain"><QnAView/></span>
          <span class ="QnAComment"><QnAComment/></span>
        <span class="Footer"><Footer/></span>
      </div>
    </div>
  );
}

export default ViewLayout;
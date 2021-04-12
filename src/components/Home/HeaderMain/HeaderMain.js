import React from 'react';
import chair from '../../../images/Chair.png'
const HeaderMain = () => {
    return (
      <main style ={{height:'600px'}} className= "row d-flex align-items-center">
          <div className="col-md-4 offset-md-1">
             <h1 style={{color: '#3A4256'}}> Your New Smile <br/> Starts Here</h1>
             <p className="text-secondary"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quas optio voluptate ad voluptas deleniti eos accusamus possimus autem aut praesentium fugiat voluptates laborum, deserunt corrupti. Aut enim facere animi optio eligendi voluptas minima nisi tempora, tempore ex fugiat in labore quos. Nihil eius veniam totam voluptatibus sed, voluptatem alias?</p>
             <button className="btn btn-primary"> GET APPOINtMENT</button>
          </div>
       <div className="col-md-6">
         <img src={chair} alt="" className="img-fluid"/>
       </div>
      </main>
    );
};

export default HeaderMain;
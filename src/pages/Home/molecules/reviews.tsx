import React from "react";
import reviewers from "../../../assets/images/reviewer.png"


const Reviews = () => {
  return (
    <div className="flex flex-row gap-10 mb-10">
      <div className="rounded-full w-1/5">
        <img src={reviewers} alt="profileImage" />
      </div>
      <div className="flex flex-col w-4/5 mr-20">
        <p className="font-medium text-xl">Burnt Brains exceeded our expectations with their Salesforce and MERN Stack solutions. Top-notch service and support!" - Wade Warrens.</p>
        <div className="flex flex-row pt-20 gap-5">
          <h1 className="text-xl font-bold">Wade Warrens</h1>
          <h1 className="text-tertiory mt-1">AZURE DATA ENGINEERING</h1>
        </div>
      </div>            
    </div>
 );
};

export default Reviews;

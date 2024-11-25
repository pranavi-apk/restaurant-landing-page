import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Pick Your Meals",
      text: "Explore a variety of dishes from our curated menu. Select the meals that suit your taste and dietary preferences.",
    },
    {
      image: ChooseMeals,
      title: "Choose How Often",
      text: "Decide how frequently you’d like your meals delivered. Customize your plan to fit your schedule and appetite.",
    },
    {
      image: DeliveryMeals,
      title: "Fast Deliveries",
      text: "Enjoy fresh, delicious meals delivered straight to your doorstep, ensuring convenience and quality every time.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
          Discover the simple steps to enjoy chef-prepared meals at home. Our
          process is designed to make your dining experience effortless and
          delightful.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt={data.title} />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;

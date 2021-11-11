import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Risks from './components/Risks/Risks';
import PotentialRisks from './components/Risks/PotentialRisks'
import RiskChanceExperts from './components/RiskChanceExperts/RiskChanceExperts';
import { useState } from 'react'
import RiskChancePrio from './components/RiskChanceExperts/RiskChancePrio';
import ComboRiskChance from './components/RiskChanceExperts/ComboRiskChance';
import RiskMedigation from './components/RiskMedigation/RiskMedigation';
import ComboRisk from './components/Risks/ComboRisk';
import {default as ComboMoniRisk} from './components/RiskMonitoring/ComboRiskChance';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1, 
    arrows: true
  };
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <Slider {...settings} style={{width: '90vw', height: "90vh"}}>
        <div>
          <h1>Ідентифікація ризиків</h1>
          <ComboRisk />
        </div>

        <div>
          <h1>Аналіз ризиків</h1>
          <ComboRiskChance />
        </div>
        <div>
          <h1>Усунення ризиків</h1>
          <RiskMedigation />
        </div>

        <div>
          <h1>Моніторинг</h1>
          <ComboMoniRisk />
        </div>

      </Slider>

    </div>
  );
}

export default App;

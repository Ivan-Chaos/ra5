import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Risks from './components/Risks/Risks';
import PotentialRisks from './components/Risks/PotentialRisks'
import RiskChanceExperts from './components/RiskChanceExperts/RiskChanceExperts';
import {useState} from 'react'
import RiskChancePrio from './components/RiskChanceExperts/RiskChancePrio';
import ComboRiskChance from './components/RiskChanceExperts/ComboRiskChance';
import RiskMedigation from './components/RiskMedigation/RiskMedigation';
import ComboRisk from './components/Risks/ComboRisk';

function App() {
  
  return (
    <div>
      <ComboRisk />
    </div>
  );
}

export default App;

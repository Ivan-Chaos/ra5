import { useState, useEffect } from 'react'
import ExpertCoef from './ExpertCoef';
import RiskChanceExperts from './RiskChanceExperts';
import RiskChancePrio from './RiskChancePrio';

const ComboRiskChance = () => {
    const [avgs, setAvgs] = useState(new Array(47).fill(0));
    const [coefs, setCoefs] = useState([ new Array(10).fill(0.1), new Array(10).fill(0.1), new Array(10).fill(0.1), new Array(10).fill(0.1)])

    useEffect(()=>{
        console.log("🚀 ~ file: ComboRiskChance.js ~ line 13 ~ ComboRiskChance ~ coefs", coefs)
        
    }, [coefs])


    return (<div>
        <ExpertCoef setCoefs ={setCoefs}/>
        
        <RiskChanceExperts setIncomingEr={setAvgs} coefs = {coefs} />

        <RiskChancePrio er={avgs} />

    </div>);
}

export default ComboRiskChance;
import { useState, useEffect } from 'react'
import ExpertCoef from './ExpertCoef';
import RiskChanceExperts from './RiskChanceExperts';
import RiskChancePrio from './RiskChancePrio';
import Button from '@material-ui/core/Button';
import Stack from '@mui/material/Stack';


const ComboRiskChance = () => {
    const [avgs, setAvgs] = useState(new Array(47).fill(0));
    const [coefs, setCoefs] = useState([new Array(10).fill(0.1), new Array(10).fill(0.1), new Array(10).fill(0.1), new Array(10).fill(0.1)])

    const [currentlyShowing, setCurrentlyShowing] = useState(0);

    useEffect(() => {
        console.log("🚀 ~ file: ComboRiskChance.js ~ line 13 ~ ComboRiskChance ~ coefs", coefs)

    }, [coefs])


    return (<div>
         <hr />
        <Stack direction="row" spacing={2} style={{margin: '1em'}}>
            <Button size="large" variant={currentlyShowing ==0 ? "outlined": ""} onClick={()=>setCurrentlyShowing(0)}>
                Результуюче оцінювання ризиків
            </Button>

            <Button variant={currentlyShowing ==1 ? "outlined": ""} size="large" onClick={()=>setCurrentlyShowing(1)}>
                Результуюча величина ризиків
            </Button>
        </Stack>
        <hr />
        {currentlyShowing==0 && <RiskChanceExperts setIncomingEr={setAvgs} coefs={coefs} coefs={coefs} />}

        {currentlyShowing==1 && <RiskChancePrio er={avgs} />}

    </div>);
}

export default ComboRiskChance;
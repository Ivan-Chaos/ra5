import {useEffect, useState, useRef} from 'react'
import { DataGrid } from '@material-ui/data-grid';


const columns = [
    {
        field: 'code',
        headerName: '',
        width: 40,
        editable: false
    },
    {
      field: 'riskName',
      headerName: 'Можливі ризики',
      width: 700,
      editable: false,
    },
    {
      field: 'value',
      headerName: 'Значення',
      width: 150,
      editable: true,
      type: 'number',
    }
    
  ];
  
  const rows = [
    {id: 1, code: 't1', riskName: 'функціональні характеристики ПЗ', value: 1},
    {id: 2, code: 't2', riskName: 'характеристики якості ПЗ', value: 1},
    {id: 3, code: 't3', riskName: 'характеристики надійності ПЗ', value: 1},
    {id: 4, code: 't4', riskName: 'застосовність ПЗ', value: 1},
    {id: 5, code: 't5', riskName: 'часова продуктивність ПЗ', value: 1},
    {id: 6, code: 't6', riskName: 'супроводжуваність ПЗ', value: 1},
    {id: 7, code: 't7', riskName: 'повторне використання компонент ПЗ', value: 1},
    {id: 8, code: 'c1', riskName: 'обмеження сумарного бюджету на програмний проект', value: 1},
    {id: 9, code: 'c2', riskName: 'недоступна вартість реалізації програмного проекту', value: 1},
    {id: 10, code: 'c3', riskName: 'низька ступінь реалізму при оцінюванні витрат на програмний проект', value: 1},
    {id: 11, code: 'p1', riskName: 'властивості та можливості гнучкості внесення змін до планів життєвого циклу розроблення ПЗ', value: 1},
    {id: 12, code: 'p2', riskName: 'можливості порушення встановлених термінів реалізації етапів життєвого циклу розроблення ПЗ', value: 1},
    {id: 13, code: 'p3', riskName: 'низька ступінь реалізму при встановленні планів і етапів життєвого циклу розроблення ПЗ', value: 1},
    {id: 14, code: 'm1', riskName: 'хибна стратегія реалізації програмного проекту', value: 1},
    {id: 15, code: 'm2', riskName: 'неефективне планування проекту розроблення ПЗ', value: 1},
    {id: 16, code: 'm3', riskName: 'неякісне оцінювання програмного проекту', value: 1},
    {id: 17, code: 'm4', riskName: 'прогалини в документуванні етапів реалізації програмного проекту', value: 1},
    {id: 18, code: 'm5', riskName: 'промахи в прогнозуванні результатів реалізації програмного проекту', value: 1},
  ];


const Risks = () => {
    
    
    const gridRef =  useRef(null);

    const [values, setValues] = useState([...new Array(18).fill(1)]);

    const [risks, setRisks] = useState({
        techRisks: 0,
        costRisks: 0,
        planningRisks: 0,
        realisationRisks: 0
    })

    useEffect(()=>{
        debugger
        let tempRisks = {...risks};
        tempRisks.techRisks = values.slice(0, 7).reduce((partial_sum, a) => partial_sum + a, 0) / 18;
        tempRisks.costRisks = values.slice(7, 10).reduce((partial_sum, a) => partial_sum + a, 0) / 18;
        tempRisks.planningRisks = values.slice(10, 13).reduce((partial_sum, a) => partial_sum + a, 0) / 18;
        tempRisks.realisationRisks = values.slice(13, 18).reduce((partial_sum, a) => partial_sum + a, 0) / 18;
        setRisks(tempRisks);
    }, [values])




    return (
        <div style={{ height: 400, width: '100%' }}>
        <p>TechRisks: {risks.techRisks.toFixed(2)}</p>
        <p>CosthRisks: {risks.costRisks.toFixed(2)}</p>
        <p>PlanningRisks: {risks.planningRisks.toFixed(2)}</p>
        <p>RealisationRisks: {risks.realisationRisks.toFixed(2)}</p>

        <DataGrid
          ref={gridRef}
          rows={rows}
          columns={columns}
          disableSelectionOnClick
          onCellEditCommit={(params, event, details)=>{
            let temp = [...values];
            temp[params.id-1]=params.value;
            setValues([...temp]);
          }}
        />
      </div>
      );
}
 
export default Risks;
import { useState, useEffect } from 'react'

import DataGrid, { TextEditor, Row, RowRendererProps } from 'react-data-grid';

const columns =[
    {key: 'riskname', title: "Ризикові події", width: 700},
    { key: 'pers1', name: '1', editor: TextEditor, width: '10px'},
    { key: 'pers2', name: '2', editor: TextEditor, width: 10 },
    { key: 'pers3', name: '3', editor: TextEditor, width: 10 },
    { key: 'pers4', name: '4', editor: TextEditor, width: 10 },
    { key: 'pers5', name: '5', editor: TextEditor, width: 10 },
    { key: 'pers6', name: '6', editor: TextEditor, width: 10 },
    { key: 'pers7', name: '7', editor: TextEditor, width: 10 },
    { key: 'pers8', name: '8', editor: TextEditor, width: 10 },
    { key: 'pers9', name: '9', editor: TextEditor, width: 10 },
    { key: 'pers10', name: '10', editor: TextEditor, width: 10 }
]

const ExpertCoef = ({setCoefs}) => {
    
   
    const [rows, setRows] = useState([
        {riskname: 'Множина настання технічних ризикових подій', pers1: 1, pers2: 1, pers3: 1, pers4: 1, pers5: 1, pers6: 1, pers7: 1, pers8: 1, pers9: 1, pers10: 1, },
        {riskname: 'Множина настання вартісних ризикових подій', pers1: 1, pers2: 1, pers3: 1, pers4: 1, pers5: 1, pers6: 1, pers7: 1, pers8: 1, pers9: 1, pers10: 1,},
        {riskname: 'Множина настання планових ризикових подій', pers1: 1, pers2: 1, pers3: 1, pers4: 1, pers5: 1, pers6: 1, pers7: 1, pers8: 1, pers9: 1, pers10: 1,},
        {riskname: 'Множина настання ризикових подій реалізації процесу управління програмним проектом', pers1: 1, pers2: 1, pers3: 1, pers4: 1, pers5: 1, pers6: 1, pers7: 1, pers8: 1, pers9: 1, pers10: 1,},
    ]);

    function rowKeyGetter(row) {
        return row.id;
    }

    useEffect(()=>{
        setCoefs(
            rows.map(e=>{
                let res = [];

                let sum = 0;

                for(let i=0; i<10; i++){
                    sum += parseFloat(e["pers"+(i+1)]);
                }

                for(let i=0; i<10; i++){
                    res.push(parseFloat(e["pers"+(i+1)])/sum);
                }
                return res;
            })
        );
    }, [rows])
    
    return (<>
        <DataGrid columns={columns} rows={rows} rowKeyGetter={rowKeyGetter} onRowsChange={setRows} style={{height: '12.6em', width:"80vw"}}/>
    </>);
}

export default ExpertCoef;
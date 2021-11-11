import { useState, useEffect } from 'react'
import DataGrid, { TextEditor } from 'react-data-grid';

const columns = [
    { key: 'id', name: 'ID' },
    {key: 'code', name: ''},
    { key: 'riskName', name: 'Title', width: 800 },
    { key: 'pers1', name: '1', editor: TextEditor },
    { key: 'pers2', name: '2', editor: TextEditor },
    { key: 'pers3', name: '3', editor: TextEditor },
    { key: 'pers4', name: '4', editor: TextEditor },
    { key: 'pers5', name: '5', editor: TextEditor },
    { key: 'pers6', name: '6', editor: TextEditor },
    { key: 'pers7', name: '7', editor: TextEditor },
    { key: 'pers8', name: '8', editor: TextEditor },
    { key: 'pers9', name: '9', editor: TextEditor },
    { key: 'pers10', name: '10', editor: TextEditor },
    { key: 'avg', name: 'ERp'}
];


const RiskChanceExperts = ({setIncomingEr, coefs}) => {

    const [risks, setRisks] = useState({
        techRisks: 0,
        costRisks: 0,
        planningRisks: 0,
        realisationRisks: 0
    })

    const [er, setEr] = useState(new Array(47).fill(0));

    const [userData, setUserData] = useState(new Array(47).fill(new Array(10).fill(0)));
    const [rows, setRows] = useState([
        { id: 1, code: 't1', riskName: 'затримки у постачанні обладнання, необхідного для підтримки процесу розроблення ПЗ', pers1: '0', pers2: 0, pers3: 0, pers4: 0, pers5: 0, pers6: 0, pers7: 0, pers8: 0, pers9: 0, pers10: 0, avg: 0 },
        { id: 2, code: 't2', riskName: 'затримки у постачанні інструментальних засобів, необхідних для підтримки процесу розроблення ПЗ', pers1: '0', pers2: 0, pers3: 0, pers4: 0, pers5: 0, pers6: 0, pers7: 0, pers8: 0, pers9: 0, pers10: 0, avg: 0 },
        { id: 3, code: 't3', riskName: 'небажання команди виконавців використовувати інструментальні засоби для підтримки процесу розроблення ПЗ', pers1: '0', pers2: 0, pers3: 0, pers4: 0, pers5: 0, pers6: 0, pers7: 0, pers8: 0, pers9: 0, pers10: 0, avg: 0 },
        { id: 4, code: 't4', riskName: 'формування запитів на більш потужні інструментальні засоби розроблення ПЗ', pers1: '0', pers2: 0, pers3: 0, pers4: 0, pers5: 0, pers6: 0, pers7: 0, pers8: 0, pers9: 0, pers10: 0, avg: 0 },
        { id: 5, code: 't5', riskName: 'відмова команди виконавців від CASE-засобів розроблення ПЗ', pers1: '0', pers2: 0, pers3: 0, pers4: 0, pers5: 0, pers6: 0, pers7: 0, pers8: 0, pers9: 0, pers10: 0, avg: 0  },
        { id: 6, code: 't6', riskName: 'неефективність програмного коду, згенерованого CASE-засобами розроблення ПЗ', pers1: '0', pers2: 0, pers3: 0, pers4: 0, pers5: 0, pers6: 0, pers7: 0, pers8: 0, pers9: 0, pers10: 0, avg: 0 },
        { id: 7, code: 't7', riskName: ' неможливість інтеграції CASE-засобів з іншими інструментальними засобами для підтримки процесу розроблення П', pers1: '0', pers2: 0, pers3: 0, pers4: 0, pers5: 0, pers6: 0, pers7: 0, pers8: 0, pers9: 0, pers10: 0, avg: 0  },
        { id: 8, code: 't8', riskName: ' недостатня продуктивність баз(и) даних для підтримки процесу розроблення ПЗ', pers1: '0', pers2: 0, pers3: 0, pers4: 0, pers5: 0, pers6: 0, pers7: 0, pers8: 0, pers9: 0, pers10: 0, avg: 0  },
        { id: 9, code: 't9', riskName: 'програмні компоненти, які використовують повторно в ПЗ, мають дефекти та обмежені функціональні можливості', pers1: '0', pers2: 0, pers3: 0, pers4: 0, pers5: 0, pers6: 0, pers7: 0, pers8: 0, pers9: 0, pers10: 0, avg: 0  },
        { id: 10, code: 't10', riskName: 'швидкість виявлення дефектів у програмному коді є нижчою від раніше запланованих термінів', pers1: '0', pers2: 0, pers3: 0, pers4: 0, pers5: 0, pers6: 0, pers7: 0, pers8: 0, pers9: 0, pers10: 0, avg: 0  },
        { id: 11, code: 't11', riskName: 'поява дефектних системних компонент, які використовують для розроблення ПЗ', pers1: '0', pers2: 0, pers3: 0, pers4: 0, pers5: 0, pers6: 0, pers7: 0, pers8: 0, pers9: 0, pers10: 0, avg: 0  },
        { id: 12, code: 'c1', riskName: 'недооцінювання витрат на реалізацію програмного проекту (надмірно низька вартість)', pers1: '0', pers2: 0, pers3: 0, pers4: 0, pers5: 0, pers6: 0, pers7: 0, pers8: 0, pers9: 0, pers10: 0, avg: 0 },
        { id: 13, code: 'c2', riskName: 'переоцінювання витрат на реалізацію програмного проекту (надмірно низька вартість)', pers1: '0', pers2: 0, pers3: 0, pers4: 0, pers5: 0, pers6: 0, pers7: 0, pers8: 0, pers9: 0, pers10: 0, avg: 0  },
        { id: 14, code: 'c3', riskName: 'фінансові ускладнення у компанії-замовника ПЗ', pers1: '0', pers2: 0, pers3: 0, pers4: 0, pers5: 0, pers6: 0, pers7: 0, pers8: 0, pers9: 0, pers10: 0, avg: 0 },
        { id: 15, code: 'c4', riskName: 'фінансові ускладнення у компанії-розробника ПЗ', pers1: '0', pers2: 0, pers3: 0, pers4: 0, pers5: 0, pers6: 0, pers7: 0, pers8: 0, pers9: 0, pers10: 0, avg: 0  },
        { id: 16, code: 'c5', riskName: 'зменшення бюджету програмного проекта з ініціативи компанії-замовника ПЗ під час його реалізації', pers1: '0', pers2: 0, pers3: 0, pers4: 0, pers5: 0, pers6: 0, pers7: 0, pers8: 0, pers9: 0, pers10: 0, avg: 0  },
        { id: 17, code: 'c6', riskName: 'збільшення бюджету програмного проекта з ініціативи компанії-розробника ПЗ під час його реалізації;', pers1: '0', pers2: 0, pers3: 0, pers4: 0, pers5: 0, pers6: 0, pers7: 0, pers8: 0, pers9: 0, pers10: 0, avg: 0  },
        { id: 18, code: 'c7', riskName: 'висока вартість виконання повторних робіт, необхідних для зміни вимог до ПЗ', pers1: '0', pers2: 0, pers3: 0, pers4: 0, pers5: 0, pers6: 0, pers7: 0, pers8: 0, pers9: 0, pers10: 0, avg: 0 },
        { id: 19, code: 'c8', riskName: 'реорганізація структурних підрозділів у компанії-замовника ПЗ', pers1: '0', pers2: 0, pers3: 0, pers4: 0, pers5: 0, pers6: 0, pers7: 0, pers8: 0, pers9: 0, pers10: 0, avg: 0  },
        { id: 20, code: 'c9', riskName: 'реорганізація команди виконавців у компанії-розробника ПЗ', pers1: '0', pers2: 0, pers3: 0, pers4: 0, pers5: 0, pers6: 0, pers7: 0, pers8: 0, pers9: 0, pers10: 0, avg: 0  },
        { id: 21, code: 'p1', riskName: 'зміни графіка виконання робіт з боку замовника чи виконавця', pers1: '0', pers2: 0, pers3: 0, pers4: 0, pers5: 0, pers6: 0, pers7: 0, pers8: 0, pers9: 0, pers10: 0, avg: 0  },
        { id: 22, code: 'p2', riskName: 'порушення графіка виконання робіт у компанії-розробника ПЗ', pers1: '0', pers2: 0, pers3: 0, pers4: 0, pers5: 0, pers6: 0, pers7: 0, pers8: 0, pers9: 0, pers10: 0, avg: 0  },
        { id: 23, code: 'p3', riskName: 'потреба зміни користувацьких вимог до ПЗ з боку компанії-замовника ПЗ', pers1: '0', pers2: 0, pers3: 0, pers4: 0, pers5: 0, pers6: 0, pers7: 0, pers8: 0, pers9: 0, pers10: 0, avg: 0  },
        { id: 24, code: 'p4', riskName: 'потреба зміни функціональних вимог до ПЗ з боку компанії-розробника ПЗ', pers1: '0', pers2: 0, pers3: 0, pers4: 0, pers5: 0, pers6: 0, pers7: 0, pers8: 0, pers9: 0, pers10: 0, avg: 0  },
        { id: 25, code: 'p5', riskName: 'потреба виконання великої кількості повторних робіт, необхідних для зміни вимог до ПЗ', pers1: '0', pers2: 0, pers3: 0, pers4: 0, pers5: 0, pers6: 0, pers7: 0, pers8: 0, pers9: 0, pers10: 0, avg: 0  },
        { id: 26, code: 'p6', riskName: 'недооцінювання тривалості етапів реалізації програмного проекту з боку компанії-розробника ПЗ', pers1: '0', pers2: 0, pers3: 0, pers4: 0, pers5: 0, pers6: 0, pers7: 0, pers8: 0, pers9: 0, pers10: 0, avg: 0  },
        { id: 27, code: 'p7', riskName: 'переоцінювання тривалості етапів реалізації програмного проекту', pers1: '0', pers2: 0, pers3: 0, pers4: 0, pers5: 0, pers6: 0, pers7: 0, pers8: 0, pers9: 0, pers10: 0, avg: 0  },
        { id: 28, code: 'p8', riskName: 'остаточний розмір ПЗ перевищує заплановані його характеристики', pers1: '0', pers2: 0, pers3: 0, pers4: 0, pers5: 0, pers6: 0, pers7: 0, pers8: 0, pers9: 0, pers10: 0, avg: 0  },
        { id: 29, code: 'p9', riskName: 'остаточний розмір ПЗ значно менший за планові його характеристики', pers1: '0', pers2: 0, pers3: 0, pers4: 0, pers5: 0, pers6: 0, pers7: 0, pers8: 0, pers9: 0, pers10: 0, avg: 0  },
        { id: 30, code: 'p10', riskName: 'поява на ринку аналогічного ПЗ до виходу замовленого', pers1: '0', pers2: 0, pers3: 0, pers4: 0, pers5: 0, pers6: 0, pers7: 0, pers8: 0, pers9: 0, pers10: 0, avg: 0  },
        { id: 31, code: 'p11', riskName: 'поява на ринку більш конкурентоздатного ПЗ', pers1: '0', pers2: 0, pers3: 0, pers4: 0, pers5: 0, pers6: 0, pers7: 0, pers8: 0, pers9: 0, pers10: 0, avg: 0  },
        { id: 32, code: 'm1', riskName: 'низький моральний стан персоналу команди виконавців ПЗ', pers1: '0', pers2: 0, pers3: 0, pers4: 0, pers5: 0, pers6: 0, pers7: 0, pers8: 0, pers9: 0, pers10: 0, avg: 0 },
        { id: 33, code: 'm2', riskName: 'низька взаємодія між членами команди виконавців ПЗ', pers1: '0', pers2: 0, pers3: 0, pers4: 0, pers5: 0, pers6: 0, pers7: 0, pers8: 0, pers9: 0, pers10: 0, avg: 0 },
        { id: 34, code: 'm3', riskName: 'пасивність керівника (менеджера) програмного проекту', pers1: '0', pers2: 0, pers3: 0, pers4: 0, pers5: 0, pers6: 0, pers7: 0, pers8: 0, pers9: 0, pers10: 0, avg: 0  },
        { id: 35, code: 'm4', riskName: 'недостатня компетентність керівника (менеджера) програмного проекту', pers1: '0', pers2: 0, pers3: 0, pers4: 0, pers5: 0, pers6: 0, pers7: 0, pers8: 0, pers9: 0, pers10: 0, avg: 0  },
        { id: 36, code: 'm5', riskName: 'незадоволеність замовника результатами етапів реалізації програмного проекту', pers1: '0', pers2: 0, pers3: 0, pers4: 0, pers5: 0, pers6: 0, pers7: 0, pers8: 0, pers9: 0, pers10: 0, avg: 0  },
        { id: 37, code: 'm6', riskName: 'недостатня кількість фахівців у команді виконавців ПЗ з необхідним професійним рівнем', pers1: '0', pers2: 0, pers3: 0, pers4: 0, pers5: 0, pers6: 0, pers7: 0, pers8: 0, pers9: 0, pers10: 0, avg: 0  },
        { id: 38, code: 'm7', riskName: 'хвороба провідного виконавця в найкритичніший момент розроблення ПЗ', pers1: '0', pers2: 0, pers3: 0, pers4: 0, pers5: 0, pers6: 0, pers7: 0, pers8: 0, pers9: 0, pers10: 0, avg: 0  },
        { id: 39, code: 'm8', riskName: 'одночасна хвороба декількох виконавців підчас розроблення ПЗ', pers1: '0', pers2: 0, pers3: 0, pers4: 0, pers5: 0, pers6: 0, pers7: 0, pers8: 0, pers9: 0, pers10: 0, avg: 0  },
        { id: 40, code: 'm9', riskName: 'неможливість організації необхідного навчання персоналу команди виконавців ПЗ', pers1: '0', pers2: 0, pers3: 0, pers4: 0, pers5: 0, pers6: 0, pers7: 0, pers8: 0, pers9: 0, pers10: 0, avg: 0  },
        { id: 41, code: 'm10', riskName: 'зміна пріоритетів у процесі управління програмним проектом', pers1: '0', pers2: 0, pers3: 0, pers4: 0, pers5: 0, pers6: 0, pers7: 0, pers8: 0, pers9: 0, pers10: 0, avg: 0 },
        { id: 42, code: 'm11', riskName: 'недооцінювання необхідної кількості розробників (підрядників і субпідрядників) на етапах життєвого циклу розроблення ПЗ', pers1: '0', pers2: 0, pers3: 0, pers4: 0, pers5: 0, pers6: 0, pers7: 0, pers8: 0, pers9: 0, pers10: 0, avg: 0  },
        { id: 43, code: 'm12', riskName: 'переоцінювання необхідної кількості розробників (підрядників і субпідрядників) на етапах життєвого циклу розроблення ПЗ', pers1: '0', pers2: 0, pers3: 0, pers4: 0, pers5: 0, pers6: 0, pers7: 0, pers8: 0, pers9: 0, pers10: 0, avg: 0  },
        { id: 44, code: 'm13', riskName: 'надмірне документування результатів на етапах реалізації програмного проекту', pers1: '0', pers2: 0, pers3: 0, pers4: 0, pers5: 0, pers6: 0, pers7: 0, pers8: 0, pers9: 0, pers10: 0, avg: 0  },
        { id: 45, code: 'm14', riskName: 'недостатнє документування результатів на етапах реалізації програмного проекту', pers1: '0', pers2: 0, pers3: 0, pers4: 0, pers5: 0, pers6: 0, pers7: 0, pers8: 0, pers9: 0, pers10: 0, avg: 0  },
        { id: 46, code: 'm15', riskName: 'нереалістичне прогнозування результатів на етапах реалізації програмного проекту', pers1: '0', pers2: 0, pers3: 0, pers4: 0, pers5: 0, pers6: 0, pers7: 0, pers8: 0, pers9: 0, pers10: 0, avg: 0  },
        { id: 47, code: 'm16', riskName: 'недостатній професійний рівень представників від компанії-замовника ПЗ', pers1: '0', pers2: 0, pers3: 0, pers4: 0, pers5: 0, pers6: 0, pers7: 0, pers8: 0, pers9: 0, pers10: 0, avg: 0  },
    
    ]);

    useEffect(()=>{
        if(rows.findIndex((e, index)=>{
            return userData[index].findIndex((e1, index1)=>{
                return parseFloat(e['pers'+(index1+1)])!==e1;
            }) !== -1
        })==-1)
            return;

        
        let tempUserData = [...userData];
        rows.forEach((e, index)=>{
            tempUserData[index] = userData[index].map((e1, index1)=>parseFloat(e['pers'+(index1+1)]));
        })        
        setUserData(tempUserData);

        let tempRisks = { ...risks };
        tempRisks.techRisks = rows.slice(0, 11).reduce((partial_sum, a) => partial_sum + a.avg, 0) / 47;
        tempRisks.costRisks = rows.slice(11, 20).reduce((partial_sum, a) => partial_sum + a.avg, 0) / 47;
        tempRisks.planningRisks = rows.slice(20, 31).reduce((partial_sum, a) => partial_sum + a.avg, 0) / 47;
        tempRisks.realisationRisks = rows.slice(31, 47).reduce((partial_sum, a) => partial_sum + a.avg, 0) / 47;
        setRisks({...tempRisks});

    }, [rows])

    useEffect(()=>{
        let tempRows = rows.map((e, index)=>{
            let temp = [...er];
            er[index] = userData[index].reduce((a, b) => a + b, 0)/userData[0].length;
            setEr([...temp]);
            if(setIncomingEr!==undefined){
                setIncomingEr([...temp])
            }
                
            
            return {...e, avg: userData[index].reduce((a, b) => a + b, 0)/userData[0].length}
        })
        setRows(tempRows);
    }, [userData])


    useEffect(()=>{
        console.log("🚀 ~ file: RiskChanceExperts.js ~ line 124 ~ RiskChanceExperts ~ er", er)
    }, [er])

    function rowKeyGetter(row) {
        return row.id;
    }

    return <div>
        <p>TechRisks: {risks.techRisks.toFixed(2)}</p>
            <p>CosthRisks: {risks.costRisks.toFixed(2)}</p>
            <p>PlanningRisks: {risks.planningRisks.toFixed(2)}</p>
            <p>RealisationRisks: {risks.realisationRisks.toFixed(2)}</p>
        
        <DataGrid columns={columns} rows={rows} rowKeyGetter={rowKeyGetter} onRowsChange={setRows} />
    </div>;
}

export default RiskChanceExperts;
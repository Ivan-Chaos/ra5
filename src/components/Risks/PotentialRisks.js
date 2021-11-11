import { useEffect, useState, useRef } from 'react'
import { DataGrid } from '@material-ui/data-grid';
import StatsBlock from './StatsBlock';


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
        width: 600,
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
    { id: 1, code: 't1', riskName: 'затримки у постачанні обладнання, необхідного для підтримки процесу розроблення ПЗ', value: 0 },
    { id: 2, code: 't2', riskName: 'затримки у постачанні інструментальних засобів, необхідних для підтримки процесу розроблення ПЗ', value: 0 },
    { id: 3, code: 't3', riskName: 'небажання команди виконавців використовувати інструментальні засоби для підтримки процесу розроблення ПЗ', value: 0 },
    { id: 4, code: 't4', riskName: 'формування запитів на більш потужні інструментальні засоби розроблення ПЗ', value: 0 },
    { id: 5, code: 't5', riskName: 'відмова команди виконавців від CASE-засобів розроблення ПЗ', value: 0 },
    { id: 6, code: 't6', riskName: 'неефективність програмного коду, згенерованого CASE-засобами розроблення ПЗ', value: 0 },
    { id: 7, code: 't7', riskName: ' неможливість інтеграції CASE-засобів з іншими інструментальними засобами для підтримки процесу розроблення П', value: 0 },
    { id: 8, code: 't8', riskName: ' недостатня продуктивність баз(и) даних для підтримки процесу розроблення ПЗ', value: 0 },
    { id: 9, code: 't9', riskName: 'програмні компоненти, які використовують повторно в ПЗ, мають дефекти та обмежені функціональні можливості', value: 0 },
    { id: 10, code: 't10', riskName: 'швидкість виявлення дефектів у програмному коді є нижчою від раніше запланованих термінів', value: 0 },
    { id: 11, code: 't11', riskName: 'поява дефектних системних компонент, які використовують для розроблення ПЗ', value: 0 },
    { id: 12, code: 'c1', riskName: 'недооцінювання витрат на реалізацію програмного проекту (надмірно низька вартість)', value: 0 },
    { id: 13, code: 'c2', riskName: 'переоцінювання витрат на реалізацію програмного проекту (надмірно низька вартість)', value: 0 },
    { id: 14, code: 'c3', riskName: 'фінансові ускладнення у компанії-замовника ПЗ', value: 0 },
    { id: 15, code: 'c4', riskName: 'фінансові ускладнення у компанії-розробника ПЗ', value: 0 },
    { id: 16, code: 'c5', riskName: 'зменшення бюджету програмного проекта з ініціативи компанії-замовника ПЗ під час його реалізації', value: 0 },
    { id: 17, code: 'c6', riskName: 'збільшення бюджету програмного проекта з ініціативи компанії-розробника ПЗ під час його реалізації;', value: 0 },
    { id: 18, code: 'c7', riskName: 'висока вартість виконання повторних робіт, необхідних для зміни вимог до ПЗ', value: 0 },
    { id: 19, code: 'c8', riskName: 'реорганізація структурних підрозділів у компанії-замовника ПЗ', value: 0 },
    { id: 20, code: 'c9', riskName: 'реорганізація команди виконавців у компанії-розробника ПЗ', value: 0 },
    { id: 21, code: 'p1', riskName: 'зміни графіка виконання робіт з боку замовника чи виконавця', value: 0 },
    { id: 22, code: 'p2', riskName: 'порушення графіка виконання робіт у компанії-розробника ПЗ', value: 0 },
    { id: 23, code: 'p3', riskName: 'потреба зміни користувацьких вимог до ПЗ з боку компанії-замовника ПЗ', value: 0 },
    { id: 24, code: 'p4', riskName: 'потреба зміни функціональних вимог до ПЗ з боку компанії-розробника ПЗ', value: 0 },
    { id: 25, code: 'p5', riskName: 'потреба виконання великої кількості повторних робіт, необхідних для зміни вимог до ПЗ', value: 0 },
    { id: 26, code: 'p6', riskName: 'недооцінювання тривалості етапів реалізації програмного проекту з боку компанії-розробника ПЗ', value: 0 },
    { id: 27, code: 'p7', riskName: 'переоцінювання тривалості етапів реалізації програмного проекту', value: 0 },
    { id: 28, code: 'p8', riskName: 'остаточний розмір ПЗ перевищує заплановані його характеристики', value: 0 },
    { id: 29, code: 'p9', riskName: 'остаточний розмір ПЗ значно менший за планові його характеристики', value: 0 },
    { id: 30, code: 'p10', riskName: 'поява на ринку аналогічного ПЗ до виходу замовленого', value: 0 },
    { id: 31, code: 'p11', riskName: 'поява на ринку більш конкурентоздатного ПЗ', value: 0 },
    { id: 32, code: 'm1', riskName: 'низький моральний стан персоналу команди виконавців ПЗ', value: 0 },
    { id: 33, code: 'm2', riskName: 'низька взаємодія між членами команди виконавців ПЗ', value: 0 },
    { id: 34, code: 'm3', riskName: 'пасивність керівника (менеджера) програмного проекту', value: 0 },
    { id: 35, code: 'm4', riskName: 'недостатня компетентність керівника (менеджера) програмного проекту', value: 0 },
    { id: 36, code: 'm5', riskName: 'незадоволеність замовника результатами етапів реалізації програмного проекту', value: 0 },
    { id: 37, code: 'm6', riskName: 'недостатня кількість фахівців у команді виконавців ПЗ з необхідним професійним рівнем', value: 0 },
    { id: 38, code: 'm7', riskName: 'хвороба провідного виконавця в найкритичніший момент розроблення ПЗ', value: 0 },
    { id: 39, code: 'm8', riskName: 'одночасна хвороба декількох виконавців підчас розроблення ПЗ', value: 0 },
    { id: 40, code: 'm9', riskName: 'неможливість організації необхідного навчання персоналу команди виконавців ПЗ', value: 0 },
    { id: 41, code: 'm10', riskName: 'зміна пріоритетів у процесі управління програмним проектом', value: 0 },
    { id: 42, code: 'm11', riskName: 'недооцінювання необхідної кількості розробників (підрядників і субпідрядників) на етапах життєвого циклу розроблення ПЗ', value: 0 },
    { id: 43, code: 'm12', riskName: 'переоцінювання необхідної кількості розробників (підрядників і субпідрядників) на етапах життєвого циклу розроблення ПЗ', value: 0 },
    { id: 44, code: 'm13', riskName: 'надмірне документування результатів на етапах реалізації програмного проекту', value: 0 },
    { id: 45, code: 'm14', riskName: 'недостатнє документування результатів на етапах реалізації програмного проекту', value: 0 },
    { id: 46, code: 'm15', riskName: 'нереалістичне прогнозування результатів на етапах реалізації програмного проекту', value: 0 },
    { id: 47, code: 'm16', riskName: 'недостатній професійний рівень представників від компанії-замовника ПЗ', value: 0 },

    
];


const PotentialRisks = () => {


    const gridRef = useRef(null);

    const [values, setValues] = useState([...new Array(47).fill(0)]);

    const [risks, setRisks] = useState({
        techRisks: 0,
        costRisks: 0,
        planningRisks: 0,
        realisationRisks: 0
    })

    useEffect(() => {
        debugger
        let tempRisks = { ...risks };
        tempRisks.techRisks = values.slice(0, 11).reduce((partial_sum, a) => partial_sum + a, 0) / 47;
        tempRisks.costRisks = values.slice(11, 20).reduce((partial_sum, a) => partial_sum + a, 0) / 47;
        tempRisks.planningRisks = values.slice(20, 31).reduce((partial_sum, a) => partial_sum + a, 0) / 47;
        tempRisks.realisationRisks = values.slice(31, 47).reduce((partial_sum, a) => partial_sum + a, 0) / 47;
        setRisks(tempRisks);
    }, [values])




    return (
        <div style={{ height: '50vh', width: '100%' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h2 style={{width: "50%"}}>Визначення можливих джерел появи ризиків</h2>
                <StatsBlock TechRisks={risks.techRisks} CostRisks={risks.costRisks} PlanningRisks={risks.planningRisks} RealisationRisks={risks.realisationRisks} Title={"Ймовірність ризик. подій"}/>

            </div>

            <DataGrid
                ref={gridRef}
                rows={rows}
                columns={columns}
                disableSelectionOnClick
                onCellEditCommit={(params, event, details) => {
                    let temp = [...values];
                    temp[params.id - 1] = params.value;
                    setValues([...temp]);
                }}
            />
        </div>
    );
}

export default PotentialRisks;
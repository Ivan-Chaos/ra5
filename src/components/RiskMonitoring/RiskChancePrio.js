import { useState, useEffect } from 'react'

import DataGrid, { TextEditor, Row, RowRendererProps } from 'react-data-grid';

const columns = [
    { key: 'id', name: 'ID', width: 50 },
    { key: 'code', name: '', width: 50 },
    { key: 'riskName', name: 'Title', width: 700 },
    { key: 'er', name: 'ERPRER' },
    { key: 'lrer', name: 'ELRER', editor: TextEditor },
    { key: 'vrer', name: 'EVRER' },
    { key: 'priority', name: 'Пріоритет' },
];


const RiskChancePrio = ({ er }) => {

    const [rows, setRows] = useState([
        { id: 1, code: 't1', riskName: 'затримки у постачанні обладнання, необхідного для підтримки процесу розроблення ПЗ', value: 0, er: 0, lrer: 0, vrer: 0, priority: 'Низький' },
        { id: 2, code: 't2', riskName: 'затримки у постачанні інструментальних засобів, необхідних для підтримки процесу розроблення ПЗ', value: 0, er: 0, lrer: 0, vrer: 0, priority: 'Низький' },
        { id: 3, code: 't3', riskName: 'небажання команди виконавців використовувати інструментальні засоби для підтримки процесу розроблення ПЗ', value: 0, er: 0, lrer: 0, vrer: 0, priority: 'Низький' },
        { id: 4, code: 't4', riskName: 'формування запитів на більш потужні інструментальні засоби розроблення ПЗ', value: 0, er: 0, lrer: 0, vrer: 0, priority: 'Низький' },
        { id: 5, code: 't5', riskName: 'відмова команди виконавців від CASE-засобів розроблення ПЗ', value: 0, er: 0, lrer: 0, vrer: 0, priority: 'Низький' },
        { id: 6, code: 't6', riskName: 'неефективність програмного коду, згенерованого CASE-засобами розроблення ПЗ', value: 0, er: 0, lrer: 0, vrer: 0, priority: 'Низький' },
        { id: 7, code: 't7', riskName: ' неможливість інтеграції CASE-засобів з іншими інструментальними засобами для підтримки процесу розроблення П', value: 0, er: 0, lrer: 0, vrer: 0, priority: 'Низький' },
        { id: 8, code: 't8', riskName: ' недостатня продуктивність баз(и) даних для підтримки процесу розроблення ПЗ', value: 0, er: 0, lrer: 0, vrer: 0, priority: 'Низький' },
        { id: 9, code: 't9', riskName: 'програмні компоненти, які використовують повторно в ПЗ, мають дефекти та обмежені функціональні можливості', value: 0, er: 0, lrer: 0, vrer: 0, priority: 'Низький' },
        { id: 10, code: 't10', riskName: 'швидкість виявлення дефектів у програмному коді є нижчою від раніше запланованих термінів', value: 0, er: 0, lrer: 0, vrer: 0, priority: 'Низький' },
        { id: 11, code: 't11', riskName: 'поява дефектних системних компонент, які використовують для розроблення ПЗ', value: 0, er: 0, lrer: 0, vrer: 0, priority: 'Низький' },
        { id: 12, code: 'c1', riskName: 'недооцінювання витрат на реалізацію програмного проекту (надмірно низька вартість)', value: 0, er: 0, lrer: 0, vrer: 0, priority: 'Низький' },
        { id: 13, code: 'c2', riskName: 'переоцінювання витрат на реалізацію програмного проекту (надмірно низька вартість)', value: 0, er: 0, lrer: 0, vrer: 0, priority: 'Низький' },
        { id: 14, code: 'c3', riskName: 'фінансові ускладнення у компанії-замовника ПЗ', value: 0, er: 0, lrer: 0, vrer: 0, priority: 'Низький' },
        { id: 15, code: 'c4', riskName: 'фінансові ускладнення у компанії-розробника ПЗ', value: 0, er: 0, lrer: 0, vrer: 0, priority: 'Низький' },
        { id: 16, code: 'c5', riskName: 'зменшення бюджету програмного проекта з ініціативи компанії-замовника ПЗ під час його реалізації', value: 0, er: 0, lrer: 0, vrer: 0, priority: 'Низький' },
        { id: 17, code: 'c6', riskName: 'збільшення бюджету програмного проекта з ініціативи компанії-розробника ПЗ під час його реалізації;', value: 0, er: 0, lrer: 0, vrer: 0, priority: 'Низький' },
        { id: 18, code: 'c7', riskName: 'висока вартість виконання повторних робіт, необхідних для зміни вимог до ПЗ', value: 0, er: 0, lrer: 0, vrer: 0, priority: 'Низький' },
        { id: 19, code: 'c8', riskName: 'реорганізація структурних підрозділів у компанії-замовника ПЗ', value: 0, er: 0, lrer: 0, vrer: 0, priority: 'Низький' },
        { id: 20, code: 'c9', riskName: 'реорганізація команди виконавців у компанії-розробника ПЗ', value: 0, er: 0, lrer: 0, vrer: 0, priority: 'Низький' },
        { id: 21, code: 'p1', riskName: 'зміни графіка виконання робіт з боку замовника чи виконавця', value: 0, er: 0, lrer: 0, vrer: 0, priority: 'Низький' },
        { id: 22, code: 'p2', riskName: 'порушення графіка виконання робіт у компанії-розробника ПЗ', value: 0, er: 0, lrer: 0, vrer: 0, priority: 'Низький' },
        { id: 23, code: 'p3', riskName: 'потреба зміни користувацьких вимог до ПЗ з боку компанії-замовника ПЗ', value: 0, er: 0, lrer: 0, vrer: 0, priority: 'Низький' },
        { id: 24, code: 'p4', riskName: 'потреба зміни функціональних вимог до ПЗ з боку компанії-розробника ПЗ', value: 0, er: 0, lrer: 0, vrer: 0, priority: 'Низький' },
        { id: 25, code: 'p5', riskName: 'потреба виконання великої кількості повторних робіт, необхідних для зміни вимог до ПЗ', value: 0, er: 0, lrer: 0, vrer: 0, priority: 'Низький' },
        { id: 26, code: 'p6', riskName: 'недооцінювання тривалості етапів реалізації програмного проекту з боку компанії-розробника ПЗ', value: 0, er: 0, lrer: 0, vrer: 0, priority: 'Низький' },
        { id: 27, code: 'p7', riskName: 'переоцінювання тривалості етапів реалізації програмного проекту', value: 0, er: 0, lrer: 0, vrer: 0, priority: 'Низький' },
        { id: 28, code: 'p8', riskName: 'остаточний розмір ПЗ перевищує заплановані його характеристики', value: 0, er: 0, lrer: 0, vrer: 0, priority: 'Низький' },
        { id: 29, code: 'p9', riskName: 'остаточний розмір ПЗ значно менший за планові його характеристики', value: 0, er: 0, lrer: 0, vrer: 0, priority: 'Низький' },
        { id: 30, code: 'p10', riskName: 'поява на ринку аналогічного ПЗ до виходу замовленого', value: 0, er: 0, lrer: 0, vrer: 0, priority: 'Низький' },
        { id: 31, code: 'p11', riskName: 'поява на ринку більш конкурентоздатного ПЗ', value: 0, er: 0, lrer: 0, vrer: 0, priority: 'Низький' },
        { id: 32, code: 'm1', riskName: 'низький моральний стан персоналу команди виконавців ПЗ', value: 0, er: 0, lrer: 0, vrer: 0, priority: 'Низький' },
        { id: 33, code: 'm2', riskName: 'низька взаємодія між членами команди виконавців ПЗ', value: 0, er: 0, lrer: 0, vrer: 0, priority: 'Низький' },
        { id: 34, code: 'm3', riskName: 'пасивність керівника (менеджера) програмного проекту', value: 0, er: 0, lrer: 0, vrer: 0, priority: 'Низький' },
        { id: 35, code: 'm4', riskName: 'недостатня компетентність керівника (менеджера) програмного проекту', value: 0, er: 0, lrer: 0, vrer: 0, priority: 'Низький' },
        { id: 36, code: 'm5', riskName: 'незадоволеність замовника результатами етапів реалізації програмного проекту', value: 0, er: 0, lrer: 0, vrer: 0, priority: 'Низький' },
        { id: 37, code: 'm6', riskName: 'недостатня кількість фахівців у команді виконавців ПЗ з необхідним професійним рівнем', value: 0, er: 0, lrer: 0, vrer: 0, priority: 'Низький' },
        { id: 38, code: 'm7', riskName: 'хвороба провідного виконавця в найкритичніший момент розроблення ПЗ', value: 0, er: 0, lrer: 0, vrer: 0, priority: 'Низький' },
        { id: 39, code: 'm8', riskName: 'одночасна хвороба декількох виконавців підчас розроблення ПЗ', value: 0, er: 0, lrer: 0, vrer: 0, priority: 'Низький' },
        { id: 40, code: 'm9', riskName: 'неможливість організації необхідного навчання персоналу команди виконавців ПЗ', value: 0, er: 0, lrer: 0, vrer: 0, priority: 'Низький' },
        { id: 41, code: 'm10', riskName: 'зміна пріоритетів у процесі управління програмним проектом', value: 0, er: 0, lrer: 0, vrer: 0, priority: 'Низький' },
        { id: 42, code: 'm11', riskName: 'недооцінювання необхідної кількості розробників (підрядників і субпідрядників) на етапах життєвого циклу розроблення ПЗ', value: 0, er: 0, lrer: 0, vrer: 0, priority: 'Низький' },
        { id: 43, code: 'm12', riskName: 'переоцінювання необхідної кількості розробників (підрядників і субпідрядників) на етапах життєвого циклу розроблення ПЗ', value: 0, er: 0, lrer: 0, vrer: 0, priority: 'Низький' },
        { id: 44, code: 'm13', riskName: 'надмірне документування результатів на етапах реалізації програмного проекту', value: 0, er: 0, lrer: 0, vrer: 0, priority: 'Низький' },
        { id: 45, code: 'm14', riskName: 'недостатнє документування результатів на етапах реалізації програмного проекту', value: 0, er: 0, lrer: 0, vrer: 0, priority: 'Низький' },
        { id: 46, code: 'm15', riskName: 'нереалістичне прогнозування результатів на етапах реалізації програмного проекту', value: 0, er: 0, lrer: 0, vrer: 0, priority: 'Низький' },
        { id: 47, code: 'm16', riskName: 'недостатній професійний рівень представників від компанії-замовника ПЗ', value: 0, er: 0, lrer: 0, vrer: 0, priority: 'Низький' },
    ]);


    function MyRowRenderer({ renderBaseRow, ...props }) {
        const color = rows[props.rowIdx].priority === 'Високий' ? "red" : rows[props.rowIdx].priority === 'Середній' ? "#d19900" : 'green';
        return <div style={{ color }}><Row {...props} /></div>
    }

    const [maxVRER, setMaxVRER] = useState(0);
    const [minVrer, setMinVRER] = useState(0);

    useEffect(() => {
        let tempEr = [...rows];

        tempEr = tempEr.map((el, index) => {
            return { ...el, er: er[index] }
        });

        setRows([...tempEr]);
    }, [er])

    useEffect(() => {

        if (rows.findIndex(e => e.er * e.lrer !== e.vrer) !== -1) {
            let tempRows = [...rows];
            tempRows = tempRows.map(e => {
                return { ...e, vrer: e.er * e.lrer }
            })
            setMaxVRER(Math.max(...tempRows.map(e => e.vrer)));
            setMinVRER(Math.min(...tempRows.map(e => e.vrer)));

            let mpr = (Math.max(...tempRows.map(e => e.vrer)) - Math.min(...tempRows.map(e => e.vrer))) / 3;

            let min = Math.min(...tempRows.map(e => e.vrer));

            tempRows = tempRows.map(e => {
                return { ...e, priority: e.vrer >= min + (mpr * 2) ? "Високий" : e.vrer >= min + mpr ? "Середній" : "Низький" }
            })

            setRows([...tempRows]);
        }


    }, [rows])

    function rowKeyGetter(row) {
        return row.id;
    }

    return (<div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <h4>EVRER min: {minVrer.toFixed(1)} </h4>
            <h4>EVRER max: {maxVRER.toFixed(1)} </h4>
            <h5 style={{color: 'green'}}>Низький пріоритет реагування: [{(minVrer).toFixed(2)}; {(minVrer + (maxVRER - minVrer) / 3).toFixed(2)}) </h5>
            <h5 style={{color: '#d19900'}}>Середній пріоритет реагування: [{(minVrer + (maxVRER - minVrer) / 3).toFixed(2)}; {(minVrer + (maxVRER - minVrer) / 3 + (maxVRER - minVrer) / 3).toFixed(2)}) </h5>
            <h5 style={{color: 'red'}}>Високий пріоритет реагування: [{(minVrer + (maxVRER - minVrer) / 3 + (maxVRER - minVrer) / 3).toFixed(2)}; {(minVrer + (maxVRER - minVrer) / 3 + (maxVRER - minVrer) / 3 + (maxVRER - minVrer) / 3).toFixed(2)}) </h5>
        </div>
        <DataGrid columns={columns} rows={rows} rowKeyGetter={rowKeyGetter} onRowsChange={setRows} rowRenderer={MyRowRenderer} style={{ height: '65vh' }} />
    </div>);
}

export default RiskChancePrio;
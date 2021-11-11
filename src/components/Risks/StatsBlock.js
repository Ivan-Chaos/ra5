import './styles/StatsBlock.scss'

const StatsBlock = ({ TechRisks, CostRisks, PlanningRisks, RealisationRisks, Title }) => {
    return (<div className={"box"}>
        <div>
            <h5>{Title}</h5>
        </div>
        <hr />
        <div className={"statrow"}>
            <div>
                <h6>Технічні ризики: </h6>
            </div>
            <div className={"numrow"}>
                <div>
                    {(TechRisks * 100).toFixed(2) + "%"}

                </div>
            </div>
        </div>

        <div className={"statrow"}>
            <div>
                <h6>Фінансові ризики: </h6>
            </div>

            <div className={"numrow"}>
                <div>
                    {(CostRisks * 100).toFixed(2) + "%"}
                </div>
            </div>
        </div>

        <div className={"statrow"}>
            <div>
                <h6>Ризики планування: </h6>
            </div>
            <div className={"numrow"}>
                <div>
                    {(PlanningRisks * 100).toFixed(2) + "%"}
                </div>
            </div>

        </div>

        <div className={"statrow"}>
            <div>
                <h6>Ризики управління: </h6>
            </div>

            <div className={"numrow"}>
                <div>
                    {(RealisationRisks * 100).toFixed(2) + "%"}
                </div>
            </div>
        </div>

        <hr style={{marginLeft: '-1em', marginRight: '-1em'}}/>
        <div className={"statrow"}>
            <div>
                <h6>Загалом: </h6>
            </div>

            <div className={"numrow"}>
                <div>
                    {((TechRisks + CostRisks + PlanningRisks +RealisationRisks) * 100).toFixed(2) + "%"}
                </div>
            </div>
        </div>
    </div>);
}

export default StatsBlock;
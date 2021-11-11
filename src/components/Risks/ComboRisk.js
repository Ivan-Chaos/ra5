import { Row, Col } from "react-bootstrap"
import PotentialRisks from "./PotentialRisks";
import Risks from "./Risks";

const ComboRisk = () => {
    return (<div>
            <Row>
                <Col>
                    <Risks />
                </Col>
                <Col>
                    <PotentialRisks />
                </Col>
            </Row>
        </div>);
}
 
export default ComboRisk;
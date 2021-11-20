import qMarkLeft from '../style/img/qMarkLeft.svg';
import qMarkRight from '../style/img/qMarkRight.svg';
import qMarkLeftWhite from '../style/img/qMarkLeftbgw.svg';
import qMarkRightWhite from '../style/img/qMarkRightbgw.svg';
import React, { useState } from 'react';
const Fact = (props) => {
    const [fact, setFact] = useState(props.fact);
    const [backGround, setBacground] = useState(props.background)

    let { value } = fact;
    return (
        <div style={{ background: backGround }} className="fact-cont">
            {backGround === "#EFF4F7" && <div>
                <img className="q-left" src={qMarkLeft} alt="quotation marks" />
                <img className="q-right" src={qMarkRight} alt="quotation marks" />
            </div>
            }
            {backGround === "#fff" && <div>
                <img className="q-left" src={qMarkLeftWhite} alt="quotation marks" />
                <img className="q-right" src={qMarkRightWhite} alt="quotation marks" />
            </div>
            }

            <div className="fact-border">
                <p className="fact">{value}</p>
            </div>
        </div>
    )


}
export default Fact
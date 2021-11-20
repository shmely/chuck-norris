import React, { useState } from 'react';
import Fact from './Fact';
const FactRow = (props) => {
    const [fact, setFact] = useState(props.fact);
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    }

    const { id, categories, created_at } = fact;
    return (
        <div className={`fact-row ${isExpanded ? 'row-selected' : ''}`} onClick={toggleExpand}>
            <div className="cells">
                <div className="id">{id}</div>
                <div className="category">{categories}</div>
                <div className="created">{created_at}</div>
            </div>
            {isExpanded &&
                <div >
                    <Fact fact={fact} background={'#EFF4F7'}></Fact>
                </div>
            }

        </div>
    )


}
export default FactRow
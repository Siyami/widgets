import React, { useState } from 'react';

const Accordion = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const onTitleClick = (ind) => {
        setActiveIndex(ind);
    }
    const renderedItems = items.map((item, ind) => {
        return (
            <React.Fragment key={item.title}>
                <div 
                    onClick={() => onTitleClick(ind)}
                    className="title active">
                    <i className="dropdown icon"></i>
                    {item.title}
                </div>
                <div className="content active">
                    <p>{item.content}</p>
                </div>
            </React.Fragment>
        );
    });

    return <div className="ui styled accordion">
        {renderedItems}
        {activeIndex}
    </div>
}

export default Accordion;
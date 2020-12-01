import React from 'react';
import Accordion from './Accordion';

const items = [
    {
        title: 'What is React',
        content: 'React is a JS framework' 
    },
    {
        title: 'What is React1',
        content: 'React is a JS framework' 
    },
    {
        title: 'What is React2',
        content: 'React is a JS framework' 
    }
];

const App = () => {
    return (
        <div>
            <Accordion  items={items} />
        </div>
    )
}

export default App;
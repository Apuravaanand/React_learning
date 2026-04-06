import React from 'react'
import CardComponent2 from '../components/CardComponent2';

const Assign2_CardComponent = () => {

    let details1 = { name: "Abcdef", age: 10, mobile: 700909090 };
    let details2= { name: "Ghijkl", age: 10, mobile: 700909097 };
    let details3 = { name: "Mnopqrs", age: 10, mobile: 706474740 };

    return (<div style={box}>
        <CardComponent2 {...details1} />
        <CardComponent2 {...details2} />
        <CardComponent2 {...details3} />
        <CardComponent2 {...details3} />
        <CardComponent2 {...details3} />
        <CardComponent2 {...details3} />
        <CardComponent2 {...details3} />
    </div>
    );
}


const box = {
    display: "flex",
    justifyContent: "justify",
    alignItems: "center",
    gap: "20px",
    flexWrap: "wrap",
};

export default Assign2_CardComponent

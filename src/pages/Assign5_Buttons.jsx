import React from 'react'
import Button5 from '../components/Button5';

const Assign5_Buttons = () => {
    return (<div className="flex gap-4 p-5">

        <Button5 variant="primary">Primary</Button5>

        <Button5 variant="secondary">Secondary</Button5>

        <Button5 variant="danger">Delete</Button5>

        <Button5 icon="🔥">With Icon</Button5>

        <Button5 loading={true}>Loading</Button5>

    </div>
    )
}

export default Assign5_Buttons;

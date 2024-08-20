import React, { useState } from 'react';

const Vikas = () => {
    // Use the useState hook to manage the state
    const [marks, setMarks] = useState(0);

    function handleOver(){
        setMarks(marks+1);
    }

    return (
        <div>
            <h1 onMouseOver={handleOver}>Vikas marks {marks}</h1>
        </div>
    );
};

export default Vikas;
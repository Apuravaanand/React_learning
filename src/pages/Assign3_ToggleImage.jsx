import React, { useState } from "react";

const Assign3_ToggleImage = () => {
    const [even, setEven] = useState(0);

    const setFun = () => {
        setEven(even + 1);

    }

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>

            <div style={{ margin: "60px" }}>
                {even % 2 == 0 ? (
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvZzze7wkhUnSZKmm34in0NhM6-jnoJO186Yp4jBkInQ&s"
                        alt="Image 1"
                    />
                ) : (
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWSdxQNbev7wUh2zPUthDMH6J0-9_OxcZrTg&s"
                        alt="Image 2"
                    />
                )}
            </div>

            <button onClick={setFun}>
                {even % 2 == 0 ? "Even img" : "Odd image"}
            </button>

        </div>
    );
};

export default Assign3_ToggleImage;
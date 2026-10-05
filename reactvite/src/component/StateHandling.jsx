import React, { useState } from 'react';
import vns from '../images/vns.png';

function StateHandling() {

    const [count, setCount] = useState(100);

    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(255);
    const [blue, setBlue] = useState(0);

    const [vnsHeight, setVnsHeight] = useState(200);
    const [vnsWidth, setVnsWidth] = useState(200);

    const [rotation, setRotation] = useState(0);

    function changeBColor() {
        setRed(Math.floor(Math.random() * 256));
        setGreen(Math.floor(Math.random() * 256));
        setBlue(Math.floor(Math.random() * 256));
    }

    function enhanceHeight() {
        setVnsHeight(vnsHeight + 10);
    }

    function enhancedWidth() {
        setVnsWidth(vnsWidth + 10);
    }

    function reducedWidth() {
        setVnsWidth(vnsWidth - 10);
    }

    function reducedHeight() {
        setVnsHeight(vnsHeight - 10);
    }

    function rotateImage() {
        setRotation(rotation + 10);
    }

    return (
        <div>
            <h2>Change Background Color</h2>

            <div
                style={{
                    backgroundColor: `rgb(${red},${green},${blue})`,
                    border: '2px solid red',
                    height: '300px',
                    width: '300px',
                    justifyContent: 'center',
        alignItems: 'center',
        margin: 'auto'
                }}
            >
                <img
                    src={vns}
                    height={vnsHeight}
                    width={vnsWidth}
                    alt="VNS"
                    style={{
                        transform: `rotate(${rotation}deg)`
                    }}
                />
            </div>

            <div>
                <button onClick={changeBColor}>
                    Change BColor
                </button>

                <button onClick={enhanceHeight}>
                    Increase Height
                </button>

                <button onClick={enhancedWidth}>
                    Increase Width
                </button>

                <button onClick={reducedWidth}>
                    Decrease Width
                </button>

                <button onClick={reducedHeight}>
                    Decrease Height
                </button>

                <button onClick={rotateImage}>
                    Rotate
                </button>
            </div>
        </div>
    );
}

export default StateHandling;
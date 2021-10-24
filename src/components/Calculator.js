import React, { useRef, useState } from 'react';
import './Calculator.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus, faDivide, faTimes, faEquals, faCircle } from '@fortawesome/free-solid-svg-icons';
//let textLeft = { textAlign: "left" };
const Calculator = () => {
    const [isLeft, setIsLeft] = useState(false);
    let inputValue = useRef();
    const handleBtns = (e) => {
        if (e.target.id) {
            if (e.target.id === "add") {
                (inputValue.current.value) += "+";
            }
            else if (e.target.id === "sub") {
                (inputValue.current.value) += "-";
            }
            else if (e.target.id === "mul") {
                (inputValue.current.value) += "*";
            }
            else if (e.target.id === "add") {
                (inputValue.current.value) += "+";
            }
            else if (e.target.id === "dot") {
                (inputValue.current.value) += ".";
            }
            else if (e.target.id === "div") {
                (inputValue.current.value) += "/";
            }
            else if (e.target.id === "equ") {
                let result = eval(inputValue.current.value);
                inputValue.current.value = "";
                setIsLeft(true);
                (inputValue.current.value) += result;
            }
        }
        else {
            if (e.target.innerText === "AC") {
                inputValue.current.value = "";
            }
            else {
                (inputValue.current.value) += e.target.innerText;
            }

        }
    }
    return (
        <div className="calc-container">
            <div className="calc-body">
                <div className="screen">
                    <input className={isLeft && "textLeft"} type="text" ref={inputValue} />
                </div>

                <div className="btn" onClick={handleBtns}>
                    <div className="orange">(</div>
                    <div>)</div>
                    <div>%</div>
                    <div>AC</div>
                    <div>7</div>
                    <div>8</div>
                    <div>9</div>
                    <div id="div"><FontAwesomeIcon icon={faDivide} /></div>
                    <div>4</div>
                    <div>5</div>
                    <div>6</div>
                    <div id="mul"><FontAwesomeIcon icon={faTimes} /></div>
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div id="sub"><FontAwesomeIcon icon={faMinus} /></div>
                    <div>0</div>
                    <div id="dot" style={{ fontSize: "6px" }}>
                        <FontAwesomeIcon icon={faCircle} /></div>
                    <div id="equ" style={{ backgroundColor: "blue" }}><FontAwesomeIcon icon={faEquals} /></div>
                    <div id="add"><FontAwesomeIcon icon={faPlus} /></div>
                </div>

            </div>

        </div>
    );
};

export default Calculator;
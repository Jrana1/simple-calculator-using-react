import React from 'react';
import './Calculator.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus, faDivide, faTimes } from '@fortawesome/free-solid-svg-icons'

const Calculator = () => {
    return (
        <div className="calc-container">
            <div className="calc-body">
                <div className="screen">
                    <input type="text" />
                </div>

                <div className="btn">
                    <div>(</div>
                    <div>)</div>
                    <div>%</div>
                    <div>AC</div>
                    <div>7</div>
                    <div>8</div>
                    <div>9</div>
                    <div><FontAwesomeIcon icon={faDivide} /></div>
                    <div>4</div>
                    <div>5</div>
                    <div>6</div>
                    <div><FontAwesomeIcon icon={faTimes} /></div>
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div><FontAwesomeIcon icon={faMinus} /></div>
                    <div>0</div>
                    <div>.</div>
                    <div>=</div>
                    <div><FontAwesomeIcon icon={faPlus} /></div>
                </div>

            </div>

        </div>
    );
};

export default Calculator;
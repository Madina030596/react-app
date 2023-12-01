import React, { useState } from 'react';
import './CostForm.css';

const CostForm = (props) => {

    const [inputName, setInputName] = useState(''); //изначально инпут пустой (начальное состояние)
    const [inputAmount, setInputAmount] = useState(''); //изначально инпут пустой (начальное состояние)
    const [inputDate, setInputDate] = useState(''); //изначально инпут пустой (начальное состояние)

    // const [userInput, setUserInput] = useState({
    //     name: '',
    //     amount: '', 
    //     date: '',
    // })

    const nameChangeHandler = (event) => {
        setInputName(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     name: event.target.value,
        // });
        // setUserInput((previousState) => {
        //     return {
        //         ...previousState,
        //         name: event.target.value,
        //     }
        // })
    }

    const amountChangeHandler = (event)=> {
        setInputAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     amount: event.target.value,
        // });
    }

    const dateChangeHandler = (event)=> {
        setInputDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     date: event.target.value
        // });
    }


    const submitHandler = (event) => {
        event.preventDefault();

        const costData = {
            description: inputName, 
            amount: inputAmount,
            date: new Date(inputDate),
        };

        props.onSaveCostData(costData);
        setInputName('');
        setInputAmount('');
        setInputDate('');
    }

    // const removeHandler = ()=> {
    //     setInputName('');
    //     setInputAmount('');
    //     setInputDate('');
    // }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-cost__controls">
                <div className="new-cost__control">
                    <label>Название</label>
                    <input type="text" onChange={nameChangeHandler} value={inputName}/>
                </div>
                <div className="new-cost__control">
                    <label>Сумма</label>
                    <input type="number" min='0.01' step='0.01' onChange={amountChangeHandler} value={inputAmount}/>
                </div>
                <div className="new-cost__control">
                    <label>Дата</label>
                    <input type="date" min='2019-01-01' step='2022-12-31' onChange={dateChangeHandler} value={inputDate}/>
                </div>
                <div className="new-cost__actions">
                    <button type="submit">Добавить расход</button>
                    <button type='button' onClick={props.onCancel}>Отмена</button>
                </div>
            </div>
        </form>
    )
}

export default CostForm;
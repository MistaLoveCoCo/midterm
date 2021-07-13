import React,{useContext} from 'react'


import registryContext from '../context/RegistryContext'

const CashValue = () => {

    const {selectedNumbers, amountValues, cashAdded, setCashAdded} = useContext(registryContext)

    const onBtnIncreaseCash = (id) => {

        if (selectedNumbers.length <= 4) {

            alert("Please choose the 5 numbers.")
        } else {
            const updatedCashVal = cashAdded

            const chosenCashVal = amountValues.find(amountValue => amountValue.id === id)
            
            setCashAdded(updatedCashVal+chosenCashVal.cashVal)
        }
    }

    const onBtnDoCash = () => {

        if (selectedNumbers.length <= 4) {

            alert("Please choose the 5 numbers.")
        } else if (cashAdded < 1) {

            alert("Please add cash to the ticket.")
        } else {

            let valueStr = "";

            selectedNumbers.forEach(element => {
                
                if(element == "undefined") {

                }
                valueStr += element.title + ", "
            });
            alert("The customer has selected " + valueStr + "and has chosen the ticket's value to be $" + cashAdded)
        }
    }

    return (

        <>
        <h2 className="font-color text-center">Total cash: ${cashAdded}</h2>
        {amountValues.map((amountValue) => (

            <button className="round-btn-cash" style={{margin: "10px"}} onClick={() => onBtnIncreaseCash(amountValue.id)}>${amountValue.cashVal}</button>
        ))}
        <button className={cashAdded ? "rect-btn-cash-sel" : "rect-btn-cash-unsel"} style={{margin: "20px"}} onClick={onBtnDoCash}>Cash!</button>

        </>
    )
}

export default CashValue

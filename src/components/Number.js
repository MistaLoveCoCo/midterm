import React from 'react'
import {useContext} from 'react'

import registryContext from "../context/RegistryContext"

const Number = ({id, numValue, btnStatus}) => {

    const {numbers, setNumbers, selectedNumbers, setSelectedNumbers} = useContext(registryContext)

    const onBtnStateChange = () => {

        const updateSelectNumList = [...selectedNumbers]
        const updateNumList = [...numbers]

        const chosenNumber = numbers.find(number => number.id === id)

        if (chosenNumber.btnState === false) {

            if (updateSelectNumList.length <= 4) {

                setNumbers(updateNumList.map((btnStateChange) => {

                    if (btnStateChange.id == chosenNumber.id) {

                        return {...btnStateChange, btnState: true}
                    } else {

                        return btnStateChange
                    }
                }))

                setSelectedNumbers(updateSelectNumList => [...updateSelectNumList, chosenNumber])
            } else {

                alert("You can ONLY chose 5 numbers.")
            }
            
        } else {

            setNumbers(updateNumList.map((btnStateChange) => {

                if (btnStateChange.id == chosenNumber.id) {

                    return {...btnStateChange, btnState: false}
                } else {

                    return btnStateChange
                }
            }))
            setSelectedNumbers(selectedNumbers.filter(chosenNumber => chosenNumber.id !== id))
        }
    }

    return (

        <>
            <button className={btnStatus ? "round-btn-sel" : "round-btn-unsel"} style={{margin: "20px"}} onClick={onBtnStateChange}>{numValue}</button>
        </>
    )
}

export default Number

import React from 'react'
import {useContext} from 'react'
import Number from './Number'

import registryContext from "../context/RegistryContext"

const NumberContainer = () => {

    const {numbers, setNumbers, selectedNumbers, setSelectedNumbers, setCashAdded} = useContext(registryContext)

    const onBtnDoRandom = () => {

        if (selectedNumbers.length >= 1) {

            if (!window.confirm("Selection(s) made. Click OK if you still want to Randomise")) {

                return;
            } else {

                onBtnDoClear()
            }
            
        }
        
        let randomNumArr = [];

        const updateSelectNumList = [...selectedNumbers]
        const updateNumList = [...numbers]

        while(randomNumArr.length < 5) {

            let randomNum = Math.floor(Math.random() * 19) + 1;

            if(randomNumArr.indexOf(randomNum) === -1) randomNumArr.push(randomNum);
        }
        
        randomNumArr.forEach(randNum => {

            setSelectedNumbers(updateSelectNumList => [...updateSelectNumList, {id: randNum, title: randNum}])
            updateNumList[randNum] = {id: randNum+1, title: parseInt(randNum)+1, btnState: true}
        })

        setNumbers(updateNumList)
    }

    const onBtnDoClear = () => {

        const numObjGenerator = [];

        for (let x = 1; x <=20; x++) {
        
          numObjGenerator.push({id: x, title: x, btnState: false})
        }
      
        setNumbers(numObjGenerator)
      
        setSelectedNumbers([])
            
        setCashAdded(0)

    }

    return (
        <>
            {numbers.map((number) => (<Number id={number.id} numValue={number.title} btnStatus={number.btnState}/>))}

            <button className="rect-btn-unsel" style={{margin: "20px", marginLeft: "30px"}} onClick={onBtnDoRandom}>Random</button>
            <button className="rect-btn-unsel" style={{margin: "20px"}} onClick={onBtnDoClear}>Clear</button>
        </>
    )
}

export default NumberContainer

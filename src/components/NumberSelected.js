import React, {useContext} from 'react'

import registryContext from '../context/RegistryContext'

const NumberSelected = () => {

    const {selectedNumbers} = useContext(registryContext);

    return (

        <>
        <h2 className="font-color text-center">Numbers Selected</h2>

            {selectedNumbers.map((selectedNumber) => (

                <button className="round-btn-sel" style={{margin: "10px"}}>{selectedNumber.title}</button>
            ))}
        </>
    )
}

export default NumberSelected

import '../assets/bootstrap.css'
import {useState} from "react"

import Header from './Header'
import NumberSelected from './NumberSelected'
import CashValue from './CashValue'
import NumberContainer from './NumberContainer'

import registryContext from '../context/RegistryContext'

function App() {

  const numObjGenerator = [];

  for (let x = 1; x <=20; x++) {
  
    numObjGenerator.push({id: x, title: x, btnState: false})
  }

  const [numbers, setNumbers] = useState(numObjGenerator)

  const [selectedNumbers, setSelectedNumbers] = useState([])

  const [amountValues, setAmountValues] = useState([{"id": 1, "cashVal": 1}, {"id": 2, "cashVal": 5}, {"id": 3, "cashVal": 10}, {"id": 4, "cashVal": 20}])

  const [cashAdded, setCashAdded] = useState(0)

  return (
    <div className="app-backgroud">

      <Header/>
      <registryContext.Provider value={{numbers, setNumbers, selectedNumbers, setSelectedNumbers, amountValues, setAmountValues, cashAdded, setCashAdded}} >

      <div className="container">
        <div className="row">

          <div className="col-md-7 text-center transp-border ">
            <NumberContainer/>
          </div>

          <div className="col-md-5">

            <div className="text-center transp-border" style={{margin: "20px", height: "40vh", paddingTop: "10px"}}>
              <NumberSelected/>
            </div>

            <div className="text-center transp-border" style={{margin: "20px", height: "40vh", paddingTop: "20px"}}>
              <CashValue/>
            </div>

          </div>

        </div>
      </div>

      </registryContext.Provider>
    </div>
  );
}

export default App;

import { useState } from "react"
import styles from "./Calculator.module.css"

export default function() {
  let [altura, setAltura] = useState(0)
  let [peso, setPeso] = useState(0)

  const imc = () => {
    if(altura > 0 && peso > 0) {
      return peso / altura / altura
    } else {
      return 'Adicione sua altura e seu peso para obter seu IMC'
    }
  }

  return (
    <div>
      <div className={styles.calculatorContainer}>
        <input type="number" placeholder='altura' onChange={event => setAltura(parseInt(event.target.value))} />
        <input type="number" placeholder='peso' onChange={event => setPeso(parseInt(event.target.value))} />
      </div>
      <p>{imc()}</p>
    </div>
  )
}
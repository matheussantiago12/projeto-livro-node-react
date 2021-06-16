import React, { useState } from 'react'

const Teste = () => {
    const [counter, setCounter] = useState(0)

    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>+1</button>
            <h2>Você já clicou {counter} vezes</h2>
        </>
    )
}

export default Teste

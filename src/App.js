import React, { useState } from "react"
import Confetti from "react-confetti"
import Die from "./Die"

function App() {
    
    return (
        <main>
            <div className="die-container">
                <Die value="1" />
                <Die value="1" />
                <Die value="1" />
                <Die value="1" />
                <Die value="1" />
                <Die value="1" />
                <Die value="1" />
                <Die value="1" />
                <Die value="1" />
                <Die value="1" />
            </div>
        </main>
    )
}

export default App;
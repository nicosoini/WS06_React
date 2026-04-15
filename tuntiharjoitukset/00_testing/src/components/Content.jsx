import React from 'react';

import { useState } from "react";


const Content = () => {

    const name = 'BullStack';

    const [nimi, setNimi] = useState('FullStack');

    const handleNimi = () => {
        const nimi = ['FullStack', 'JavaScript', 'React', 'Laurea']
        const randomNimi = nimi[Math.floor(Math.random() * nimi.length)]
        return randomNimi;
    }

    const handleClick = () => {
        console.log('Button clicked');
    }


    const handleClick2 = (name) => {
        console.log(`'Button clicked ' ${name}`);
    }

    const handleClick3 = (e) => {
        console.log(e.target.innerText);
    }

    return (
        <main>
            {/* Your content goes here */}

            {/* HTML elementti, joka näkyy selaimessa */}
            <h1>Terve maailma</h1>

            {/* Paragraph element with a variable */}
            <p>Hello {name}</p>

            {/* // Paragraph element with a double click event handler and a function call */}
            <p onDoubleClick={() => {
                setNimi(handleNimi());
                console.log(nimi);
            }}>Hello {nimi}</p>


            {/* // Button element with an event handler */}
            <button onClick={handleClick}>Nappi 1</button>

            {/* // Button element with an event handler and a parameter */}
            <button onClick={() => handleClick2("JavaScript")}>Nappi 2</button>

            {/* // Button element with an event handler and a event parameter */}
            <button onClick={(e) => handleClick3(e)}>Nappi 3</button>

            {/* Paragraph with a string  */}
            <p>{"Opiskellaan JSXäää"}</p>

            {/* Paragraph with a variable */}
            <p>{nimi}</p>

            {/* Paragraph with a function call */}
            <p>Komponentti päivitetty: {new Date().toLocaleTimeString()}</p>

            {/* Paragraph with a list */}
            <p>Paragraph with a list: {[1, 2, 3]}</p>

            {/* Paragraph with a list and a map method */}
            <p>Paragraph with a list ...[1,2,3]</p>
            <p>...and a map method: {[1, 2, 3].map(n => n * 2)}</p>

            {/* Paragraph with a string method */}
            <p>{nimi.toUpperCase()}</p>
        </main>
    );
};

export default Content;
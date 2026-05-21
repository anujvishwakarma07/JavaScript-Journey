import React, { useEffect, useState } from 'react'

const Jokes = () => {
    const [joke, setJoke] = useState({});
    const url = "https://official-joke-api.appspot.com/random_joke";

    const getJoke = async ()=>{
        const response = await fetch(url);
        const jsonResponse = await response.json();
        console.log(jsonResponse);
        setJoke({
            setup : jsonResponse.setup,
            punchline : jsonResponse.punchline,
        })
    }

    useEffect(()=> {
       async function getFirstJoke () {
            const response  =  await fetch(url);
            const jsonResponse = await response.json();
            setJoke({
                setup : jsonResponse.setup,
                punchline : jsonResponse.punchline,
            })
       }

       getFirstJoke();
    }, [])

  return (
    <div>
        <h3>Jokes !</h3>
        <p>{joke.setup}</p>
        <p>{joke.punchline}</p>
        <button onClick={getJoke}>Joke</button>
    </div>
  )
}

export default Jokes
import { useEffect, useState } from 'react'
import './App.css'
import DisplayWords from './DisplayWords'

function App() {

 const [data, setData] = useState() 

  useEffect(()=>{
    async function fetchData(){
      await fetch("http://localhost:3566/getWords")
      .then(res=>res.json())
      .then(dt=>{
        setData(dt.msg)
      })
    }

    fetchData()
  }, [])

  const handleFormSubmit = (e)=>{
    e.preventDefault()

    const word = e.target[0].value
    const meaning = e.target[1].value

    e.target[0].value = ""
    e.target[1].value = ""

    const formInfo = {
      word: word,
      meaning: meaning
    }

    console.log(word + meaning)

    async function sendRequest(){
        await fetch("http://localhost:3566/saveWord", {
          method: "POST",
            headers:{'Content-type': 'application/json'},
            body: JSON.stringify(formInfo) 

        })
        .then(res=>res.json())
        .then(dt=>console.log(dt))
        window.location.reload(false)
    }

    sendRequest()

  }
  return (
    <div>
      {/* <button onClick={() => window.location.reload(false)}>Click to reload!</button> */}
      <h1 className='heading'>Memorize words Like never before</h1>
      <hr />
      <div className="addWordForm">
        <form onSubmit={handleFormSubmit}>
          <input type="text" name='word' placeholder='Enter your word here' id='word'/>
          <input type="text" name='meaning' placeholder='Enter the meaning of that word' id='meaning'/>
          <input type="submit" value="add word" />
        </form>
      </div>

      <DisplayWords data={data}/>
    </div>
  );
}

export default App;

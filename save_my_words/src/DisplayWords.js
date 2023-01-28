import React from 'react'
import WordMeaning from './WordMeaning'

export default function DisplayWords(props) {
    if(!props.data){
        return(
            <h1>Loading ...</h1>
        )
    }
  return (
    <div>
        {console.log(props.data)}

        <table>
            <thead>
            <tr>
                <th>Word</th>
                <th id='meaningcol'>Meaning</th>
            </tr>
            </thead>

            <tbody> 
        {props.data.map(dt=>{
            return(
                <WordMeaning key={dt._id} dt = {dt}/>
            )
        })}

            </tbody>
        </table>
    </div>
  )
}

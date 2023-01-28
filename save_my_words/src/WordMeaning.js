import React from 'react'

export default function WordMeaning(props) {
  return (
    <tr>
        <td>{props.dt.word}</td>
        <td>{props.dt.meaning}</td>
    </tr>
  )
}

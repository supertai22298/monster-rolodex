import React from 'react'
import './card.styles.css'

export const Card = (props) => {
  let monster = props.monster
  let imgSrc = `https://robohash.org/${monster.id}?set=set3&size=180x180`
  return (
    <div className="card-container">
      <img src={imgSrc} alt={monster.name} />
      <h2>{monster.name}</h2>
      <p>{monster.email}</p>
    </div>
  )
}

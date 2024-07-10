import React from 'react'

const CharacterComponent = () => {
  return (
    <div key={character.id} className='charcter_container'>
    <div>
        <img className='character_image' src={character.image} alt="" />
    </div>
    <div className='character_description'>
        <p className='character_name'>{character.name}</p>
        <p className='character_status'>{character.status}-{character.species}</p>
        <p id='last_seen'>Last Seen on</p>
        <p>(character.location.name)</p>

    </div>
    
</div>  )
  
}

export default CharacterComponent
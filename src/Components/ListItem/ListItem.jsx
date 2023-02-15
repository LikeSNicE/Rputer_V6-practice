import React from 'react';
import './ListItem.scss';
const ListItem = ({
  id,
  name,
  username,
  street,
  city,
  phone
}) => {
  return (
    <div className='card'>
      <div className="card-image">
        <figure className='image '>
           <img src="https://pbs.twimg.com/media/FTyogVUWYAIo64T?format=jpg&name=900x900" alt="Placeholder image"></img>
        </figure>
      </div>
      <div className="card-content">
        <div className="media-content">
          <p className="title is-4">{name}</p>
          <p className="subtitle is-4">{username}</p>
        </div>

        <div className="content">
          <p className='subtitle is-5'>Personal address :</p> 
          <p>Street : {street}</p>
          <p>City : {city}</p>
          <p>Phone : {phone}</p>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
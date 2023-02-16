import React from 'react';

const PostItem = ({
  userId,
  id,
  title,
  body,
  onRemove
}) => {
  return (
    <article className="message is-link">
      <div className="message-header">
        <p className=''>{title}</p>
        <button className="delete" aria-label="delete" 
        onClick={() => (
          onRemove(id)
        )}></button>
      </div>
      <div className="message-body">
        <div className='title is-4'>UserId : {userId}</div>
        <div className='title is-5'>Number of post : {id}</div>
       <p>
        {body}
       </p>
      </div>
    </article>
  );
};

export default PostItem;
import React from 'react';

const PostItem = ({
  userId,
  id,
  title,
  body
}) => {
  return (
    <article className="message is-link">
      <div className="message-header">
        <p>{title}</p>
        <button class="delete" aria-label="delete"></button>
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
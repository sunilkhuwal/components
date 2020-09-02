import React from "react";
import Faker from "faker";

const CommentDetail = ({ author, timeAgo, comment }) => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={Faker.image.avatar()} />
      </a>
      <div className="content">
        <a href="/" className="autherName">
          {author}
        </a>
        <div className="metadata">
          <span className="date"> {timeAgo}</span>
        </div>
        <div className="text">{comment}</div>
      </div>
    </div>
  );
};

export default CommentDetail;

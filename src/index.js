import React from "react";
import ReactDom from "react-dom";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="Alex"
          timeAgo="Today at 4pm"
          comment="Its good, I liked it"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Broth"
          timeAgo="Today at 2am"
          comment="Its good, super keep it up"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Malda"
          timeAgo="Today at 1pm"
          comment="Its good, I loved it"
        />
      </ApprovalCard>
    </div>
  );
};

ReactDom.render(<App />, document.getElementById("root"));

//https://semantic-ui.com

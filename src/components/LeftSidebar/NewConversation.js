import React from "react";

function NewConversation(props) {
  let handleClick = () => {
    props.showNewConvoTab(true);
  };
  return (
    <div className="new-convo">
      <div onClick={handleClick}>
        <i className="fas fa-plus"> </i>
        <p>New Conversation </p>
      </div>
    </div>
  );
}

export default NewConversation;

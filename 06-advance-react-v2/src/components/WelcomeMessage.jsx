import React from "react";

const WelcomeMessage = ({ onGetPostsClick }) => {
  return (
    <center>
      <h1 className="welcome-msg">There are no new posts</h1>
      <button
        type="button"
        className="btn btn-primary"
        onClick={onGetPostsClick}
      >
        View Posts
      </button>
    </center>
  );
};

export default WelcomeMessage;

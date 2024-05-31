import { createContext, useReducer } from "react";

const DEFAULT_CONTEXT = {
  postList: [],
  addPost: () => {},
  deletePost: () => {},
};

export const PostList = createContext(DEFAULT_CONTEXT);

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;

  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  const addPost = (userId, postTitle, postBody, reactions, tags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reactions: reactions,
        userId: userId,
        tags: tags,
      },
    });
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "001",
    title: "Learn Web Development",
    body: "Web developers use languages like HTML, CSS, JavaScript, and server-side scripting languages like PHP, Python, or Ruby to develop websites and web applications that can be accessed over the internet.",
    reactions: 5,
    userId: "user-007",
    tags: ["WebDev", "HTML", "CSS", "JS"],
  },
  {
    id: "002",
    title: "Learn Backend Development",
    body: "Back-end development means working on server-side software, which focuses on everything you can't see on a website.",
    reactions: 3,
    userId: "user-005",
    tags: ["Express", "NodeJS", "JS", "NextJS"],
  },
];

export default PostListProvider;

const initState = {
  users: [],
  posts: [
    {
      id: "1",
      title: "Squirtle Laid an Egg",
      body:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus recusandae est laudantium cum facilis voluptatum placeat aspernatur saepe eos aut totam similique in, mollitia, soluta nulla vel ipsa amet porro?"
    },
    {
      id: "2",
      title: "Charmadner Laid an Egg",
      body:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus recusandae est laudantium cum facilis voluptatum placeat aspernatur saepe eos aut totam similique in, mollitia, soluta nulla vel ipsa amet porro?"
    },
    {
      id: "3",
      title: "a Helix Fossil Laid an Egg",
      body:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus recusandae est laudantium cum facilis voluptatum placeat aspernatur saepe eos aut totam similique in, mollitia, soluta nulla vel ipsa amet porro?"
    }
  ]
};

const rootReducer = (state = initState, action) => {
  if (action.type === "DELETE_POST") {
    let newPosts = state.posts.filter(post => {
      return action.id !== post.id;
    });
    return {
      ...state,
      posts: newPosts
    };
  }
  return state;
};

export default rootReducer;

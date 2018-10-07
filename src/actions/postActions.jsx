// delete post action
export const deletePost = id => {
  return {
    type: "DELETE_POST",
    id
  };
};

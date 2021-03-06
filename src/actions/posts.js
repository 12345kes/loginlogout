import { UPDATE_POSTS } from "./actionTypes";

export function fetchPosts() {
  return (dispatch) => {
    const url = "http://codeial.com:8000/api/v2/posts?page=1&limit=5";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log("data", data);
        dispatch(updateposts(data.data.posts));
      })
      .catch((error) => {
        console.log(error, "error is ");
      });
  };
}
export function updateposts(posts) {
  return {
    type: UPDATE_POSTS,
    posts,
  };
}

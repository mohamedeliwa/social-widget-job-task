import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "posts",
  initialState: {
    value: [
      {
        type: "text",
        content: "Hello World From Redux Store!",
      },
      {
        type: "image",
        src:
          "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
      },
      {
        type: "text",
        content: "lorem Hello garen where are you man I keen to see you live",
      },
      {
        type: "text",
        content: "lorem Hello garen where are you man I keen to see you live",
      },
      {
        type: "video",
        src: "/media/cc0-videos/flower.mp4",
      },
    ],
  },
  reducers: {
    addText: (state, action) => {
      state.value.unshift({
        type: "text",
        content: action.payload,
      });
    },
    addImage: (state, action) => {
      state.value.unshift({
        type: "image",
        src:
          // "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
          action.payload,
      });
    },
    addVideo: (state, action) => {
      state.value.unshift({
        type: "video",
        // src: "/media/cc0-videos/flower.mp4",
        src: action.payload,
      });
    },
  },
});

export const { addText, addImage, addVideo } = slice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
// export const incrementAsync = (amount) => (dispatch) => {
//   setTimeout(() => {
//     dispatch(incrementByAmount(amount));
//   }, 1000);
// };

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectPosts = (state) => state.posts.value;

export default slice.reducer;

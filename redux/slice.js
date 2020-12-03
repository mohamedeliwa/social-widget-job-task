import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "posts",
  initialState: {
    value: [
      {
        type: "text",
        content: "You can write text posts, upload .jpg images, or .mp4 videos",
      },
      // {
      //   type: "image",
      //   src:
      //     "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
      // },
      // {
      //   type: "text",
      //   content: "lorem Hello garen where are you man I keen to see you live",
      // },
      // {
      //   type: "text",
      //   content: "lorem Hello garen where are you man I keen to see you live",
      // },
      // {
      //   type: "video",
      //   src: "/media/cc0-videos/flower.mp4",
      // },
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
          action.payload,
      });
    },
    addVideo: (state, action) => {
      state.value.unshift({
        type: "video",
        src: action.payload,
      });
    },
  },
});

export const { addText, addImage, addVideo } = slice.actions;



export const selectPosts = (state) => state.posts.value;

export default slice.reducer;

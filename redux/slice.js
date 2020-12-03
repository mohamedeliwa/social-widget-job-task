import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "posts",
  initialState: {
    tag: "all",
    value: [
      {
        type: "text",
        content: "You can write text posts, upload .jpg images, or .mp4 videos",
        tags: "text",
      },
      {
        type: "image",
        src:
          "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
        tags: "images",
      },
      {
        type: "text",
        content: "lorem Hello garen where are you man I keen to see you live",
        tags: "text",
      },
      {
        type: "text",
        content: "lorem Hello garen where are you man I keen to see you live",
        tags: "text",
      },
      {
        type: "video",
        src: "/media/cc0-videos/flower.mp4",
        tags: "videos",
      },
    ],
  },
  reducers: {
    changeTag: (state, action) => {
      state.tag = action.payload;
    },
    addText: (state, action) => {
      state.value.unshift({
        type: "text",
        content: action.payload,
        tags: "text",
      });
    },
    addImage: (state, action) => {
      state.value.unshift({
        type: "image",
        src: action.payload,
        tags: "images",
      });
    },
    addVideo: (state, action) => {
      state.value.unshift({
        type: "video",
        src: action.payload,
        tags: "videos",
      });
    },
  },
});

export const { addText, addImage, addVideo, changeTag } = slice.actions;

export const selectPosts = (state) => {
  if (state.posts.tag == "all") {
    return state.posts.value;
  } else {
    return state.posts.value.filter((post) => post.tags == state.posts.tag);
  }
};

export default slice.reducer;

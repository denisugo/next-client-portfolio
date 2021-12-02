import { shallow, mount } from "enzyme";
// import { MemoryRouter } from "react-router";
// import { Provider } from "react-redux";
// import postsSlice from "../features/PostsSlice/PostsSlice";
// import commentsSlice from "../features/CommentsSlice/CommentsSlice";
// import { configureStore } from "@reduxjs/toolkit";
// import subredditsSlice from "../features/SubredditsSlice/SubredditsSlice";
// import seacrhSlice from "../features/SearchSlice/SeacrhSlice";

// export const setUp = (Component, props, path) => {
//   const wrapper = shallow(
//     <MemoryRouter initialEntries={[path ? path : "/"]}>
//       <Component {...props} />
//     </MemoryRouter>
//   );
//   return wrapper.childAt(0).dive();
// };
// export const setUpRedux = (Component, props, path) => {
//   const store = configureStore({
//     reducer: {
//       posts: postsSlice,
//       comments: commentsSlice,
//       subreddits: subredditsSlice,
//       search: seacrhSlice,
//     },
//   });

//   const wrapper = mount(
//     <Provider store={store}>
//       <MemoryRouter initialEntries={[path ? path : "/"]}>
//         <Component {...props} />
//       </MemoryRouter>
//     </Provider>
//   );

//   return wrapper;
//   // return wrapper.childAt(0).dive();
// };

export const findByDataTest = (attr, wrapper) => {
  const element = wrapper.find(`[data-testid='${attr}']`);
  return element;
};
export const findByDTextChildren = (text, wrapper) => {
  const element = wrapper.find({ children: text });
  return element;
};

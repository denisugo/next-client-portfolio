import { shallow, mount } from "enzyme";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import ProductSlice from "../features/ProductSlice/ProductSlice";

export const setUp = (Component, props, path) => {
  const wrapper = shallow(<Component {...props} />);
  return wrapper; //wrapper.childAt(0).dive();
};
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
export const findByComponent = (componentName, wrapper) => {
  const element = wrapper.find(componentName);
  return element;
};

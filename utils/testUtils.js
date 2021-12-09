import { shallow, mount } from "enzyme";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import ProductSlice from "../features/ProductSlice/ProductSlice";
import UserSlice from "../features/UserSlice/UserSlice";

export const setUp = (Component, props, path) => {
  const wrapper = shallow(<Component {...props} />);
  return wrapper;
};
// export const setUpRedux = (Component, props) => {
//   const store = configureStore({
//     reducer: {
//       user: UserSlice,
//       //TODO: Add reducers
//     },
//   });

//   const wrapper = mount(
//     <Provider store={store}>
//       <Component {...props} />
//     </Provider>
//   );

//   return wrapper;
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

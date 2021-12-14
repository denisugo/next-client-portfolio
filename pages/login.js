import react, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import router from "next/router";

import Button from "../components/Button/Button";
import Input from "../components/Input/Input";
import Meta from "../components/Head/Meta";
import style from "../styles/Login/Login.module.css";
import {
  logInUser,
  selectUser,
  selectUserError,
} from "../features/UserSlice/UserSlice";
import { routes } from "../config/constants";

function Login({ isMobile }) {
  // Field setup
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Redux setup
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const error = useSelector(selectUserError);

  useEffect(() => {
    if (user && !error) router.push(routes.user);
  }, [user, error]);

  const handleLogin = (event) => {
    event.preventDefault();
    dispatch(logInUser({ username, password }));
  };

  return (
    <>
      <Meta title="Login page" description="test" />
      <div>
        <form onSubmit={handleLogin} className={style.form}>
          {/* <div className={style.form_item}> */}
          <Input
            placeholder="username"
            value={username}
            callback={setUsername}
            type="text"
            height={50}
            width={250}
            fontSize={17}
            label="Username"
            required={true}
            pattern="([a-z]|[0-9]){2,8}"
          />
          {/* <p className={style.hint}>
              Should be lowercase and 2-8 characters in length.
            </p> */}
          {/* </div> */}
          {/* <div className={style.form_item}> */}
          <Input
            placeholder="password"
            value={password}
            callback={setPassword}
            type="password"
            height={50}
            width={250}
            fontSize={17}
            label="Password"
            required={true}
            pattern="^.{4,}$"
          />
          {/* <p className={style.hint}>
              Should be at least and 4 characters in length.
            </p> */}
          {/* </div> */}
          <Button
            text="Log me in"
            height={50}
            width={250}
            label="Log in"
            fontSize={17}
            callback={() => {}}
            data-testid="login-button"
          />
        </form>
        <div className={style.register_button}>
          <Button
            text="Don't have an account?"
            height={50}
            width={250}
            label="Registration"
            fontSize={17}
            callback={() => router.push(routes.registration)}
            data-testid="to-register"
          />
        </div>
      </div>
    </>
  );
}

export default Login;

import React from "react";
import { useState, useEffect } from "react";
import { signup } from "../../features/auth/authSlice";
import { useSelector, useDispatch } from "react-redux";

const Signup = () => {
  const [userSignup, setUserSignup] = useState({
    name: "",
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  const { modal } = useSelector((state) => state.modal);

  const onChange = (e) => {
    setUserSignup((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const userData = {
      name: userSignup.name,
      email: userSignup.email,
      password: userSignup.password,
    };
    dispatch(signup(userData));
  };

  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );

  const [error, setError] = useState(false);

  useEffect(() => {
    if (isSuccess) {
      if (localStorage.getItem("user")) {
        setError(false);
        window.location.reload();
      } else {
        setError(true);
      }
    }
  }, [user, isError, isSuccess, isLoading, message, dispatch]);
  return (
    <article className="fixed top-[20%] left-[25%] sm:left-[31%] md:left-[37%] lg:left-[43%] h-[30%] w-[52%] sm:w-[40%] md:w-[28%] lg:w-[12%] border-2 border-grey bg-white border-solid shadow-xl">
      <form className="h-[20%] w-[100%] text-[#9CC8EA]" onSubmit={onSubmit}>
        <p>Username:</p>
        <input
          className="border-2 border-solid border-black text-[black] w-[100%]"
          type="text"
          name="name"
          value={userSignup.name}
          onChange={onChange}
        />
        <p>Email:</p>
        <input
          className="border-2 border-solid border-black text-[black] w-[100%]"
          type="text"
          name="email"
          value={userSignup.email}
          onChange={onChange}
        />
        <p>Password:</p>
        <input
          className="border-2 border-solid border-black text-[black] w-[100%]"
          type="password"
          name="password"
          value={userSignup.password}
          onChange={onChange}
        />
        <input
          className="border-black border-2 rounded-lg bg-blue-400 cursor-pointer text-white h-[70%] w-[50%] hover:bg-blue-600"
          type="submit"
          value="Submit"
        />
        {error && <p className="text-[red]">Invalid login credentials</p>}
      </form>
    </article>
  );
};

export default Signup;

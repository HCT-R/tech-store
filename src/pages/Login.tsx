import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../slices/authSlice";
import { RootState } from "../store";

const Login = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({ email: "", password: "" });
  const currentUser = useSelector((state: RootState) => state.auth.currentUser);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(loginUser(form));
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">Вход</h2>
      {currentUser ? (
        <p>
          Вы уже вошли как <strong>{currentUser.username}</strong>.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="max-w-md">
          <div className="mb-4">
            <label htmlFor="email" className="block mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Введите ваш email"
              value={form.email}
              onChange={handleChange}
              className="w-full border p-2"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-1">
              Пароль
            </label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Введите пароль"
              value={form.password}
              onChange={handleChange}
              className="w-full border p-2"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Войти
          </button>
        </form>
      )}
    </div>
  );
};

export default Login;

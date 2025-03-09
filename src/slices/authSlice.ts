import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Описываем структуру пользователя
interface User {
  id: number;
  username: string;
  email: string;
  password: string; // в реальном проекте здесь не храним пароль в открытом виде!
}

// Структура состояния auth
interface AuthState {
  users: User[];           // список всех зарегистрированных пользователей
  currentUser: User | null; // текущий залогиненный пользователь
}

const initialState: AuthState = {
  users: [],
  currentUser: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // Регистрация нового пользователя
    registerUser: (
      state,
      action: PayloadAction<{ username: string; email: string; password: string }>
    ) => {
      // Создаём "нового пользователя"
      const newUser: User = {
        id: Date.now(), // простой способ сгенерировать уникальный ID
        username: action.payload.username,
        email: action.payload.email,
        password: action.payload.password, 
      };
      // Добавляем в массив users
      state.users.push(newUser);
      // Сразу логиним нового пользователя
      state.currentUser = newUser;
    },

    // Логин существующего пользователя
    loginUser: (
      state,
      action: PayloadAction<{ email: string; password: string }>
    ) => {
      const { email, password } = action.payload;
      // Ищем пользователя с таким email и паролем
      const existingUser = state.users.find(
        (u) => u.email === email && u.password === password
      );
      if (existingUser) {
        state.currentUser = existingUser;
      } else {
        // В реальном приложении выводим ошибку, показываем alert и т.п.
        console.warn("Неверный email или пароль!");
      }
    },

    // Разлогиниться
    logoutUser: (state) => {
      state.currentUser = null;
    },
  },
});

export const { registerUser, loginUser, logoutUser } = authSlice.actions;
export default authSlice.reducer;

import { useAuthUser } from "./useAuthUser";

export type IUser = {
  user: any

};

export const useAuth = () => {

  const authUser = useAuthUser();

  const setUser = (user: any) => {
    authUser.value = user;
  };

  const setCookie = (cookie: any) => {
    cookie.value = cookie;
  };

  const login = async (email: string, password: string, rememberMe: boolean) => {

    const data: IUser = await $fetch("/auth/login", {
      method: "POST",
      body: {
        email,
        password,
        rememberMe,
      },
    });

    setUser(data.user);

    // console.log('login', authUser.value);

    return authUser;

  }

  const logout = async () => {
    const data: IUser = await $fetch("/auth/logout", {
      method: "POST",
    });

    setUser(data.user);
  };

  const me = async () => {
    if (!authUser.value) {
      try {
        const data: IUser = await $fetch("/auth/me", {
          headers: useRequestHeaders(["cookie"]) as HeadersInit,
        });

        setUser(data.user);
      } catch (error) {
        setCookie(null);
      }
    }

    // console.log(authUser.value);

    return authUser;
  };

  const isLoggedIn = () => {
    const authUser = useAuthUser();
    if (!authUser.value) return false;
    return true;
  }



  return {
    login,
    logout,
    isLoggedIn,
    me
  }
}

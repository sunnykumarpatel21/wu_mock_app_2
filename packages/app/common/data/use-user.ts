import useSWR from "swr";

import { login } from "../libs/api-user";

export default function useUser() {
  const { data, mutate, error } = useSWR("api_login", login);
  console.log("####### useUser ######## ",data,error)
  const loading = !data && !error;
  const loggedIn = !error && data;
  return {
    loading,
    loggedIn,
    user: data,
    mutate,
  };
}
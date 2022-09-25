import { FunctionComponent, useEffect, useReducer } from "react";
import { AppContext, appReducer } from "./";
import IUserData from "../interface/user";
import { sortUp, sortDown } from "../helpers/sortFunctions";

export interface AppState {
  data: IUserData[];
  error: any;
  loading: Boolean;
  searchQuery: string;
  sortByName: boolean;
  sortByLastName: boolean;
  sortByEmail: boolean;
  sortByAddress: boolean;
}

const APP_INITIAL_STATE: AppState = {
  data: [],
  error: null,
  loading: false,
  searchQuery: "",
  sortByName: false,
  sortByLastName: false,
  sortByEmail: false,
  sortByAddress: false
};

interface Props {}

export const AppProvider: FunctionComponent<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, APP_INITIAL_STATE);

  useEffect(() => {
    dispatch({ type: "[UI] - loading", payload: true });
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://randomuser.me/api/?page=1&results=10",
          {
            method: "GET",
            headers: {
              dataType: "json"
            }
          }
        );
        const { results } = await response.json();
        dispatch({ type: "[UI] - loading", payload: false });
        dispatch({ type: "[User] - Load user from api", payload: results });
      } catch (error) {
        dispatch({ type: "[UI] - loading", payload: false });
        dispatch({ type: "[Error] - Load user from api", payload: error });
      }
    };

    fetchData();
  }, []);

  const filterByParams = (query: string) => {
    dispatch({ type: "[SearchQuery] - set query params", payload: query });
  };

  const setSortByName = () => {
    // if (state.sortByName === false) {
    //   dispatch({
    //     type: "[User] - Load user from api",
    //     payload: sortUp(state.data, "name")
    //   });
    //   dispatch({ type: "[Sort] - set sort by name", payload: true });
    // } else {
    //   dispatch({
    //     type: "[User] - Load user from api",
    //     payload: sortDown(state.data, "name")
    //   });
    //   dispatch({ type: "[Sort] - set sort by name", payload: false });
    // }
  };

  const setSortByLastName = () => {
    // if (state.sortByLastName === false) {
    //   dispatch({
    //     type: "[User] - Load user from api",
    //     payload: sortUp(state.data, "lastName")
    //   });
    //   dispatch({ type: "[Sort] - set sort by lastName", payload: true });
    // } else {
    //   dispatch({
    //     type: "[User] - Load user from api",
    //     payload: sortDown(state.data, "lastName")
    //   });
    //   dispatch({ type: "[Sort] - set sort by lastName", payload: false });
    // }
  };

  const setSortByEmail = () => {
    // if (state.sortByEmail === false) {
    //   dispatch({
    //     type: "[User] - Load user from api",
    //     payload: sortUp(state.data, "email")
    //   });
    //   dispatch({ type: "[Sort] - set sort by email", payload: true });
    // } else {
    //   dispatch({
    //     type: "[User] - Load user from api",
    //     payload: sortDown(state.data, "email")
    //   });
    //   dispatch({ type: "[Sort] - set sort by email", payload: false });
    // }
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        // method
        filterByParams,
        setSortByName,
        setSortByLastName,
        setSortByEmail
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

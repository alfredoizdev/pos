import { createContext } from "react";
import IUserData from "../interface/user";

interface contextProps {
  data: IUserData[];
  error: any;
  loading: Boolean;
  searchQuery: string;
  sortByName: boolean;
  sortByLastName: boolean;
  sortByEmail: boolean;
  sortByAddress: boolean;
  // method
  filterByParams: (query: string) => void;
  setSortByName: () => void;
  setSortByLastName: () => void;
  setSortByEmail: () => void;
}

export const AppContext = createContext({} as contextProps);

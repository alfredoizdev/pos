import IUserData from "../interface/user";

export const sortUp = (data: IUserData[], by: string) => {
  let dataSort = data;

  if (by === "name") {
    dataSort.sort(function (a, b) {
      if (a.name.first < b.name.first) {
        return -1;
      }
      if (a.name.first > b.name.first) {
        return 1;
      }
      return 0;
    });
  }
  if (by === "lastName") {
    dataSort.sort(function (a, b) {
      if (a.name.last < b.name.last) {
        return -1;
      }
      if (a.name.last > b.name.last) {
        return 1;
      }
      return 0;
    });
  }

  return dataSort;
};

export const sortDown = (data: IUserData[], by: string) => {
  let dataSort = data.sort().reverse();

  return dataSort;
};

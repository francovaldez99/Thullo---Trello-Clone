import { getTableroById, getAllTableros } from "../tableroSlice";
import axios from "axios";

const actionGetTableroById = (id) => {
  return (dispatch) => {
    axios
      .get("tablero/" + id)
      .then((res) => dispatch(getTableroById(res.data)));
  };
};

export { actionGetTableroById };

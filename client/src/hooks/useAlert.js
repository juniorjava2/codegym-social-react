import { useContext } from "react";
import AlertContext from "../helpers/AuthContext";

const useAlert = () => useContext(AlertContext);

export default useAlert;




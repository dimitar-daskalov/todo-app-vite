import { createContext } from "react";

const ToastContext = createContext({
  addSuccess: (message) => {},
  addError: (message) => {},
});

export default ToastContext;

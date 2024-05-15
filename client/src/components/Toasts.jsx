import { toast } from "react-toastify";

export function errorNotify(error) {
  toast.error(error, {
    autoClose: 2000,
    closeOnClick: true,
    pauseOnHover: false,
    pauseOnFocusLoss: false,
  });
}

export function successNotify(message) {
  toast.success(message, {
    autoClose: 2000,
    closeOnClick: true,
    pauseOnHover: false,
    pauseOnFocusLoss: false,
  });
}

import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

export default function useQuickOut() {
  const { userName, token } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token || !userName) navigate("/");
  }, []);
}

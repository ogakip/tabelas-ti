import * as Styled from "./styles";
import { FormContainer } from "../../components/formLogin";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../utils/axios";
import { toast } from "react-toastify";
import { AuthContext } from "../../context/auth";

export const Login = () => {
  const getToken = localStorage.getItem("accessToken");
  let navigate = useNavigate();
  const [formData, setFormData] = useState(undefined);
  const { login } = useContext(AuthContext)

  useEffect(() => {
    if (getToken) {
      navigate("/dashboard");
    }
  }, [getToken]);

  useEffect(() => {
    if (formData) {
      login(formData)
    }
  }, [formData]);

  return (
    <Styled.Container>
      <FormContainer setFormData={setFormData} />
    </Styled.Container>
  );
};

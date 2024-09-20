import * as Styled from "./styles";
import { TextField, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import {
    AiOutlineUser,
  AiOutlineKey,
  AiFillEyeInvisible,
  AiFillEye,
} from "react-icons/ai";

export const FormContainer = ({ setFormData }: any) => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onSubmitForm = (data: any) => {
    setFormData(data);
    reset();
  };

  const resetForm = () => {
    reset();
  };

  useEffect(() => {
    const { username, password } = errors;
    const allErrors = [ username, password ];
    const filterErrors = allErrors.filter((error) => error !== undefined);
    filterErrors.map((error) => toast.error(`${error.message}`));
  }, [errors]);

  return (
    <Styled.Container>
      <h2>Login</h2>
      <Styled.InputContainer onSubmit={handleSubmit(onSubmitForm)}>
        <TextField
          {...register("username")}
          placeholder="Usuário"
          label="Usuário"
          InputProps={{
            startAdornment: <AiOutlineUser size="20px" className="form-icon" />,
          }}
        />
        <TextField
          type={showPassword ? "text" : "password"}
          {...register("password")}
          placeholder="Senha"
          label="Senha"
          InputProps={{
            startAdornment: <AiOutlineKey size="20px" className="form-icon" />,
            endAdornment: (
              <>
                {showPassword ? (
                  <AiFillEye
                    className="eye-icon"
                    size="25px"
                    onClick={handleShowPassword}
                  />
                ) : (
                  <AiFillEyeInvisible
                    className="eye-icon"
                    size="25px"
                    onClick={handleShowPassword}
                  />
                )}
              </>
            ),
          }}
        />
        <div className="btn-box">
          <Button type="submit" variant="contained">
            Login
          </Button>
          <Button onClick={resetForm} variant="outlined">
            Limpar
          </Button>
        </div>
      </Styled.InputContainer>
    </Styled.Container>
  );
};

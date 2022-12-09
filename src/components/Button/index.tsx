import { ButtonContainer, ButtonContainerFalse } from "./styles";
import { IButtonProps } from "./types";

const Button = ({ title, onClick, disabled }: IButtonProps) => {
  if(disabled === false){
    return <ButtonContainer onClick={onClick} disabled={disabled}>
    {title}
    </ButtonContainer>;
  } else {
    return <ButtonContainerFalse onClick={onClick} disabled={disabled}>
    {title}
    </ButtonContainerFalse>;
  }
};

export default Button;

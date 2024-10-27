export type ButtonProps = {
  onClick?: () => void;
  children: string | React.ReactNode;
  className?: string;
  type?: string;
  isSecondary?: boolean;
  isDisabled?: boolean;
  isRed?: boolean;
  withArrow?: boolean;
};

export type InputPropType = {
  id?: string;
  label?: string;
  placeholder?: string;
  value?: string;
  onChange: (val?: any) => void;
  type?: string;
  isPassword?: boolean;
  isDisabled?: boolean;
  isSecondary?: boolean;
};

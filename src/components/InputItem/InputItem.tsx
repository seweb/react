import { InputHTMLAttributes } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

type FieldError = {
  message?: string;
};

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  placeholder: string;
  className: string;
  error?: FieldError | undefined;
  formItemRegister: UseFormRegisterReturn;
}

export function InputItem(props: InputProps) {
  const { type, placeholder, className, error, formItemRegister, ...rest } = props;
  return (
    <fieldset className="form-group">
      <input
        className={className}
        type={type}
        placeholder={placeholder}
        {...formItemRegister} // eslint-disable-line react/jsx-props-no-spreading
        {...rest} // eslint-disable-line react/jsx-props-no-spreading
      />
      <div className="error-messages">{error && error.message}</div>
    </fieldset>
  );
}

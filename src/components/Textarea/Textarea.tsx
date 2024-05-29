import { TextareaHTMLAttributes } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

type FieldError = {
  message?: string;
};

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  placeholder: string;
  className: string;
  rows: number;
  error?: FieldError | undefined;
  formItemRegister: UseFormRegisterReturn;
}

export function Textarea(props: TextareaProps) {
  const { placeholder, className, formItemRegister, error, rows, ...rest } = props;
  return (
    <fieldset className="form-group">
      <textarea
        className={className}
        rows={rows}
        placeholder={placeholder}
        {...formItemRegister} // eslint-disable-line react/jsx-props-no-spreading
        {...rest} // eslint-disable-line react/jsx-props-no-spreading
      />
      <div className="error-messages">{error && error.message}</div>
    </fieldset>
  );
}

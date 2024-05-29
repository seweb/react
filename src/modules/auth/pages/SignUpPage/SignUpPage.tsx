import { useForm } from 'react-hook-form';
import { useCreateUser } from '@/modules/auth/api/auth.mutation';
import { useNavigation } from '@/hooks';
import { showModal } from '@/store/modal.store';
import { InputItem, Button, ErrorsList } from '@/components';
import { RouterConfig } from '@/constants/routes';

type UserData = {
  username: string;
  email: string;
  password: string;
};

function SignUpPage() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<UserData>();

  const { handlePushAutoCall } = useNavigation();

  const { mutate, isPending, error } = useCreateUser();

  const onSubmit = (user: UserData) => {
    const payload = { user: { ...user } };
    mutate(payload, {
      onSuccess: () => {
        showModal({
          variant: 'success',
          text: 'User was created',
          onConfirm: handlePushAutoCall(RouterConfig.SignIn),
          onClose: handlePushAutoCall(RouterConfig.SignIn),
        });
      },
    });
  };

  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Sign up</h1>
            <p className="text-xs-center">
              <a href="/login">Have an account?</a>
            </p>
            <ErrorsList errorsList={error} />
            <form onSubmit={handleSubmit(onSubmit)}>
              <InputItem
                className="form-control form-control-lg"
                type="text"
                placeholder="User name"
                formItemRegister={register('username', {
                  required: 'User name is required',
                })}
                error={errors.username}
              />
              <InputItem
                className="form-control form-control-lg"
                type="text"
                placeholder="Email"
                formItemRegister={register('email', { required: 'Email is required' })}
                error={errors.email}
              />
              <InputItem
                className="form-control form-control-lg"
                type="password"
                placeholder="Password"
                formItemRegister={register('password', {
                  required: 'Password is required',
                  minLength: { value: 6, message: 'Should be more than 6 letters' },
                })}
                error={errors.password}
              />
              <Button
                type="submit"
                className="btn btn-lg btn-primary pull-xs-right"
                text="Sign up"
                isLoading={isPending}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;

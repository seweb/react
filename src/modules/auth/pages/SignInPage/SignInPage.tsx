import { useForm } from 'react-hook-form';
import { useLoginUser } from '@/modules/auth/api/auth.mutation';
import { useNavigation } from '@/hooks';
import { useTranslation } from 'react-i18next';
import { InputItem, Button, ErrorsList } from '@/components';
import { RouterConfig } from '@/constants/routes';
function SignInPage() {
  const { t } = useTranslation();

  type UserData = {
    email: string;
    password: string;
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<UserData>();

  const { handlePush } = useNavigation();

  const { mutate, isPending, error } = useLoginUser();

  const onSubmit = (user: UserData) => {
    const payload = { user: { ...user } };
    mutate(payload, {
      onSuccess: () => {
        handlePush(RouterConfig.Home);
      },
    });
  };
  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">{t('auth:signIn')}</h1>
            <p className="text-xs-center">
              <a href="/register">{t('auth:needAnAccount')}</a>
            </p>
            <ErrorsList errorsList={error} />
            <form onSubmit={handleSubmit(onSubmit)}>
              <InputItem
                className="form-control form-control-lg"
                type="text"
                placeholder={t('auth:email')}
                formItemRegister={register('email', { required: 'Email is required' })}
                error={errors.email}
              />
              <InputItem
                className="form-control form-control-lg"
                type="password"
                placeholder={t('auth:password')}
                formItemRegister={register('password', {
                  required: 'Password is required',
                  minLength: { value: 6, message: 'Should be more than 6 letters' },
                })}
                error={errors.password}
              />
              <Button
                type="submit"
                className="btn btn-lg btn-primary pull-xs-right"
                text={t('auth:signIn')}
                isLoading={isPending}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignInPage;

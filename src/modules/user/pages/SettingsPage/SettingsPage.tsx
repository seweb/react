import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useGetUser } from '@/modules/user/api/user.query';
import { useUpdateUser } from '@/modules/user/api/user.mutation';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@/hooks';
import { InputItem, Textarea, Button, ErrorsList } from '@/components';
import { showModal } from '@/store/modal.store';
import { removeItem } from '@/utils';
import { setIsAuthorized } from '@/store/auth.store';

function SettingsPage() {
  const { t } = useTranslation();
  const [rows] = useState<number>(8);
  type UserData = {
    image: string;
    username: string;
    bio: string;
    email: string;
    password: string;
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<UserData>();

  const { data } = useGetUser();
  console.log('data', data);
  const { mutate, isPending, error } = useUpdateUser();
  const { handlePush } = useNavigation();

  useEffect(() => {
    if (data) {
      const { user } = data;
      reset(user);
    }
  }, [data]);

  const onSubmit = (user: UserData) => {
    const payload = { user: { ...user } };
    mutate(payload, {
      onSuccess: () => {
        showModal({
          variant: 'success',
          text: 'User data was updated',
        });
      },
    });
  };

  const logOut = () => {
    removeItem('token');
    setIsAuthorized(false);
    handlePush('/unauthorized');
  };

  return (
    <div className="settings-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">{t('user:settings:yourSettings')}</h1>
            <ErrorsList errorsList={error} />
            <form onSubmit={handleSubmit(onSubmit)}>
              <InputItem
                className="form-control form-control-lg"
                type="text"
                placeholder={t('user:settings:picture')}
                formItemRegister={register('image', { required: 'Profile picture is required' })}
                error={errors.image}
              />
              <InputItem
                className="form-control form-control-lg"
                type="text"
                placeholder={t('user:settings:name')}
                formItemRegister={register('username', { required: 'User name is required' })}
                error={errors.username}
              />
              <Textarea
                className="form-control form-control-lg"
                placeholder={t('user:settings:bio')}
                rows={rows}
                formItemRegister={register('bio')}
                error={errors.bio}
              />
              <InputItem
                className="form-control form-control-lg"
                type="text"
                placeholder={t('user:settings:email')}
                formItemRegister={register('email', { required: 'Email is required' })}
                error={errors.email}
              />
              <InputItem
                className="form-control form-control-lg"
                type="text"
                placeholder={t('user:settings:newPassword')}
                formItemRegister={register('password')}
                error={errors.password}
              />
              <Button
                type="submit"
                className="btn btn-lg btn-primary pull-xs-right"
                text={t('user:settings:updateSettings')}
                isLoading={isPending}
              />
            </form>
            <hr />
            <Button
              type="submit"
              className="btn btn-outline-danger"
              text={t('user:settings:logout')}
              onClick={logOut}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SettingsPage;

import { proxy, useSnapshot } from 'valtio';
import { devtools } from 'valtio/utils';
import { getItem } from '@/utils';

type AuthState = {
  isAuthorized?: boolean;
};

type AuthStore = {
  state: AuthState;
};

const token = getItem('token');

const defaultState = (): AuthState => ({
  isAuthorized: !!token,
});

export const setIsAuthorized = (value: boolean) => {
  authStore.state.isAuthorized = value;
};

export const authStore = proxy<AuthStore>({
  state: defaultState(),
});

export const useAuthStore = () => useSnapshot(authStore).state;

devtools(authStore, { name: 'authStore', enabled: true });

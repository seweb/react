import { Api } from '@/api/axios';
import { Tags } from './tags.types';

export const getTags = async () => Api.get<never, Tags>('/tags');

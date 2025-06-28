import { env } from '@/env';
import axios from 'axios';

const BASE_URL = env.NEXT_PUBLIC_SERVER_API_URL || 'http://localhost:5000/api';

export const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});
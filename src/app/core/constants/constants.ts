const apiUrl = 'http://localhost:8080/api';

export const ApiEndpoint = {
    Auth: {
        Register: `${apiUrl}/usuario/new`,
        Login: `${apiUrl}/auth/login`, 
        Recover: `${apiUrl}/api/recovery/recover-password`,
        Reset: `${apiUrl}/api/recovery/reset-password`
    },
};

export const LocalStorage = {
    token: 'USER_TOKEN',
}
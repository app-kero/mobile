const apiUrl = 'http://localhost:8080/api';

export const ApiEndpoint = {
    Auth: {
        Register: `${apiUrl}/usuario/new`,
        Login: `${apiUrl}/auth/login`, 
    },
};

export const LocalStorage = {
    token: 'USER_TOKEN',
}
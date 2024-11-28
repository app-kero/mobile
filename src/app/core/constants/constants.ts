const apiUrl = 'http://localhost:8080/api';

export const ApiEndpoint = {
    Auth: {
        Register: `${apiUrl}/usuario/new`,
        Login: `${apiUrl}/auth/login`,
        Recover: `${apiUrl}/api/recovery/recover-password`,
        Reset: `${apiUrl}/api/recovery/reset-password`
    },
    Produtos: {
      All: `${apiUrl}/produtos`,
      Cadastrar: `${apiUrl}/produtos/new`,
      BuscarPorTag: `${apiUrl}/produtos/tag`,
      BuscarPorNome: `${apiUrl}/produtos/`
    }
};

export const LocalStorage = {
  accessToken: 'USER_TOKEN',
}

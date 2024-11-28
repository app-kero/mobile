export interface User {
    _id: string;
    name: string;
    email: string;
}

export interface LoginPayLoad {
    email: string;
    password: string;
}

export interface RegisterPayLoad {
    name: string;
    email: string;
    password: string;
}

export interface RecoverPayLoad {
    email: string;
}

export interface ApiResponse<T> {
    status?: boolean;
    message?: string;
    error?: string;
    accessToken?: string;
    data: T;
}

export interface Imagem {
    id: number,
    name: string,
    contentType: string,
    size: number,
    url: string
}

export interface Tag {
    id: number,
    nome: string
}

export interface Produto {
    id: number;
    nome: string;
    descricao: string;
    horario: string;
    local: string;
    usuario: string;
    tags: Tag[];
    fotos: Imagem[];
}

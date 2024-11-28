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

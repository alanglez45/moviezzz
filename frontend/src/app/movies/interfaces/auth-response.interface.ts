export interface AuthResponse {
    statusCode: number;
    isSuccess: boolean;
    errorMessages: string[];
    result: {
        user: {
            id: number;
            email: string;
            name: string;
        };
        token: string;
    };
}
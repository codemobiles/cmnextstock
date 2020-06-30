export interface LoginReducer {
    result: string,
    isFetching: boolean,
    isFailed: boolean,
    token: string,
    username: string
}
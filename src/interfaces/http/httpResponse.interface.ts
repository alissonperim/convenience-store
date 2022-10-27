export interface IHttpResponse {
    code: number
    message?: string
    obj?: any
}

export const created = (): IHttpResponse => {
    return {
        code: 201
    }
}

export const ok = (obj: any): IHttpResponse => {
    return {
        code: 200,
        obj,
    }
}

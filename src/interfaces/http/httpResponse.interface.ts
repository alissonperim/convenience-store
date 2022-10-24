export interface IHttpResponse {
    code: number
    message?: string
}

export class HttpResponse implements IHttpResponse {
    constructor(readonly code, readonly message) {}

    created() {
        return {
            code: this.code,
            message: this.message
        }
    }

    ok(obj: any) {
        return {
            code: this.code,
            message: this.message,
            ...obj,
        }
    }
}

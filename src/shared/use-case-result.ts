export class UseCaseResult<T>{
    result?: T
    message?: string
    success: boolean
    status: number

    constructor({ result, message, status = 200, success = true }: { result?: T, message?: string, status?: number, success?: boolean }){
        this.result = result
        this.message = message
        this.success = success
        this.status = status
    }
}
import { Pagination } from "./pagination"

export interface Paginable<T>{
    data: T[]
    pagination: Pagination
}
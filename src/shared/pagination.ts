export class Pagination{
    total: number
    pageSize: number
    page: number
    
    constructor({ total, pageSize, page }: { total: number, pageSize: number, page: number }){
        this.total = total
        this.pageSize = pageSize
        this.page = page
    }

}
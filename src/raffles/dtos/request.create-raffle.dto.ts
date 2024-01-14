export class RequestCreateRaffleDto{
    name: string
    description?: string
    raffleSize: number
    ticketPrice: number
    startDate: string
    endDate?: string
}
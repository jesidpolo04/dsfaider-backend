import { DateTime } from "luxon";
import { RequestCreateRaffleDto } from "../dtos/request.create-raffle.dto";
import { Raffle } from "../entities/raffle";
import { RaffleRepository } from "../repositories/interfaces/raffle.repository";
import { v4 as uuid } from 'uuid'

export class CreateRaffle{
    constructor(private repository: RaffleRepository){}
    
    async execute(request: RequestCreateRaffleDto){
        const raffle = Raffle.instance({
            id: uuid(),
            name: request.name,
            description: request.description,
            active: false,
            raffleSize: request.raffleSize,
            ticketPrice: request.ticketPrice,
            startDate: request.startDate ? DateTime.fromFormat(request.startDate, 'yyy-MM-dd hh:mm:ss') : undefined,
            endDate: request.endDate ? DateTime.fromFormat(request.endDate, 'yyy-MM-dd hh:mm:ss') : undefined,
        })
        return await this.repository.create(raffle) 
    }
}
import { Raffle } from "../entities/raffle";
import { RaffleRepository } from "../repositories/interfaces/raffle.repository";
import { UseCaseResult } from "../../shared/use-case-result";
import { RequestUpdateRaffleDto } from "../dtos/request.update-raffle.dto";
import { DateFormats } from "../../shared/date-formats";
import { DateTime } from "luxon";

export class UpdateRaffle{
    constructor(private repository: RaffleRepository){}
    
    async execute(raffleId: string, request: RequestUpdateRaffleDto): Promise<UseCaseResult<Raffle>>{
        let raffle = await this.repository.getById(raffleId)
        if(!raffle){
            return new UseCaseResult({ success: false, message: 'La rifa no existe', status: 404 })
        }
        raffle.update({
            ...request, 
            startDate: request.startDate ? 
                DateTime.fromFormat(request.startDate, DateFormats.STANDAR_DATE) : undefined,
            endDate: request.startDate ? 
                DateTime.fromFormat(request.startDate, DateFormats.STANDAR_DATE) : undefined
        })
        try{
            raffle = await this.repository.update(raffle);
            return new UseCaseResult({
                result: raffle
            })
        }catch(e){
            return new UseCaseResult({ success: false, message: 'Error interno del servidor', status: 500 })
        }
    }
}
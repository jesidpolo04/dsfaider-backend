import { UseCaseResult } from "../../shared/use-case-result";
import { Raffle } from "../entities/raffle";
import { RaffleRepository } from "../repositories/interfaces/raffle.repository";

export class ActivateRaffleUseCase{
    constructor(private repository: RaffleRepository){}

    async execute(raffleId: string): Promise<UseCaseResult<Raffle>>{
        let raffle = await this.repository.getById(raffleId)
        if(!raffle){
            return new UseCaseResult({ success: false, message: 'La rifa no existe', status: 404 })
        }
        raffle.update({ active: true })
        raffle = await this.repository.update(raffle)
        return new UseCaseResult({ success: true, message: 'Se activó la rifa' })
    }
}
import { Paginable } from "../../../shared/paginable";
import { Raffle } from "../../entities/raffle";
import { RaffleFilters } from "../dtos/raffle.filters";

export interface RaffleRepository{
    create(raffle: Raffle): Promise<Raffle>

    update(raffle: Raffle): Promise<Raffle>

    getById(id: string): Promise<Raffle | null>

    search(page: number, pageSize: number, filters: RaffleFilters): Promise<Paginable<Raffle>>
}
import { Repository } from "typeorm";
import { MySqlDataSource } from "../../../shared/mysql-datasource";
import { Paginable } from "../../../shared/paginable";
import { Raffle } from "../../entities/raffle";
import { RaffleFilters } from "../dtos/raffle.filters";
import { RaffleRepository } from "../interfaces/raffle.repository";

export class TypeORMRaffleRepository implements RaffleRepository{
    repository: Repository<Raffle>
    constructor(){
        this.repository = MySqlDataSource.getRepository(Raffle)
    }

    create(raffle: Raffle): Promise<Raffle> {
        return this.repository.save(raffle)
    }
    
    update(raffle: Raffle): Promise<Raffle> {
        throw new Error("Method not implemented.");
    }
    getById(id: string): Promise<Raffle | null> {
        throw new Error("Method not implemented.");
    }
    search(page: number, pageSize: number, filters: RaffleFilters): Promise<Paginable<Raffle>> {
        throw new Error("Method not implemented.");
    }

}
import { DataSource } from "typeorm";
import { Raffle } from "../raffles/entities/raffle";
import { RaffleImage } from "../raffles/entities/raffle-image";
import { RaffleTicket } from "../raffles/entities/raffle-tickets";
export const MySqlDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: true,
    logging: [ "error", "migration", "schema", "warn" ],
    entities: [ Raffle, RaffleImage, RaffleTicket ],
    subscribers: [],
    migrations: [],
    poolSize: 10
})
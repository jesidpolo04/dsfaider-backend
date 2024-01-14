import { BaseEntity, Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { DateTime } from 'luxon'
import { LuxonDateTimeTransformer } from "../../shared/luxon-transformers";

@Entity({ name: 'raffles' })
export class Raffle extends BaseEntity {
    @PrimaryColumn()
    id: string

    @Column()
    name: string

    @Column()
    description: string

    @Column({ type: 'int', name: 'raffle_size' })
    raffleSize: number

    @Column({ type: 'float', name: 'ticket_price' })
    ticketPrice: number

    @Column({ type: 'boolean' })
    active: boolean

    @Column({ type: 'datetime', name: 'start_date', transformer: LuxonDateTimeTransformer })
    startDate?: DateTime

    @Column({ type: 'datetime', name: 'end_date', transformer: LuxonDateTimeTransformer })
    endDate?: DateTime

    @CreateDateColumn({ name: 'created_at' })
    createdAt: DateTime

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: DateTime

    static instance({
        id,
        name,
        description = "",
        raffleSize,
        ticketPrice,
        active = false,
        startDate,
        endDate,
        createdAt,
        updatedAt
    }: {
        id: string,
        name: string,
        description?: string,
        raffleSize: number,
        ticketPrice: number,
        active: boolean,
        startDate?: DateTime,
        endDate?: DateTime,
        createdAt?: DateTime,
        updatedAt?: DateTime
    }): Raffle {
        const raffle = new Raffle()
        raffle.id = id
        raffle.name = name
        raffle.description = description
        raffle.raffleSize = raffleSize
        raffle.ticketPrice = ticketPrice
        raffle.active = active
        raffle.startDate = startDate
        raffle.endDate = endDate
        raffle.createdAt = createdAt ?? DateTime.now()
        raffle.updatedAt = updatedAt ?? DateTime.now()
        return raffle
    }


    public update({
        name,
        description,
        raffleSize,
        ticketPrice,
        active,
        startDate,
        endDate,
        createdAt,
        updatedAt
    }: {
        name?: string,
        description?: string,
        raffleSize?: number,
        ticketPrice?: number,
        active?: boolean,
        startDate?: DateTime,
        endDate?: DateTime,
        createdAt?: DateTime,
        updatedAt?: DateTime
    }) {
        this.name = name ?? this.name;
        this.description = description ?? this.description;
        this.raffleSize = raffleSize ?? this.raffleSize;
        this.ticketPrice = ticketPrice ?? this.ticketPrice;
        this.active = active ?? this.active;
        this.startDate = startDate ?? this.startDate;
        this.endDate = endDate ?? this.endDate;
        this.createdAt = createdAt ?? this.createdAt;
        this.updatedAt = updatedAt ?? this.updatedAt;
    }
}   
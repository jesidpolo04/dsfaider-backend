import {
    BaseEntity,
    Entity, 
    PrimaryColumn, 
    Column, 
    CreateDateColumn, 
    UpdateDateColumn, 
    JoinColumn, 
    ManyToOne,
    Index
} from "typeorm";
import { DateTime } from 'luxon'
import { Raffle } from "./raffle";

@Index(['raffle', 'ticketNumber'], { unique: true })
@Entity({ name: 'raffle_tickets' })
export class RaffleTicket extends BaseEntity {
    @PrimaryColumn()
    id: string

    @JoinColumn({ referencedColumnName: 'id', name: 'raffle' })
    @ManyToOne(() => Raffle, { cascade: true })
    raffle: Raffle

    @Column({ name: 'ticket_number' })
    ticketNumber: number

    @CreateDateColumn({ name: 'created_at' })
    createdAt: DateTime

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: DateTime
}   
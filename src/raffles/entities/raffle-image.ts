import { BaseEntity, Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn, JoinColumn, ManyToOne } from "typeorm";
import { DateTime } from 'luxon'
import { Raffle } from "./raffle";

@Entity({ name: 'raffle_images'})
export class RaffleImage extends BaseEntity{
    @PrimaryColumn()
    id: string

    @JoinColumn({ referencedColumnName: 'id', name: 'raffle' })
    @ManyToOne(()=> Raffle, { cascade: true })
    raffle: Raffle

    @Column()
    url: string

    @CreateDateColumn({ name: 'created_at' })
    createdAt: DateTime

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: DateTime
}   
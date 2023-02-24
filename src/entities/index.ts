import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity("movies")
export class Movie {

@PrimaryGeneratedColumn()
id: number

@Column("varchar",{length:50, unique:true})
name: string

@Column("text",{nullable:true})
description?: string | undefined | null

@Column("integer")
duration: number

@Column("integer")
price: number

}
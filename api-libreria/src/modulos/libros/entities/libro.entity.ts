import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn } from "typeorm";

@Entity()
export class Libro {
    @PrimaryColumn()
    id: string;

    @Column("text",{ unique: false, nullable: false })
    title: string;

    @Column("text",{ unique: true, nullable: true })
    isbn: string;

    @Column("numeric",{ nullable: true })
    pageCount: number;

    @Column("text",{ nullable: true })
    publishedDate: string; // Cambiado a tipo Date

    @Column("text",{ nullable: true })
    thumbnailUrl: string;

    @Column("text",{ nullable: true })
    shortDescription: string;

    @Column("text",{ nullable: true })
    longDescription: string;

    @Column("text",{ nullable: true })
    status: string;

    @Column("numeric",{ nullable: true })
    precio: number;
}

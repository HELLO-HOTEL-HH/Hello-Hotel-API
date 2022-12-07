import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Hotel {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar', { unique: true, nullable: false })
  hotelName: string;

  @Column('varchar')
  description: string;

  @Column('varchar', { unique: true })
  address: string;

  @Column('varchar')
  city: string;

  @Column('varchar')
  country: string;

  //relacion de numeros
  //relacion de imagenes
  //relacion de reseñas
  //relacion con rooms
  //relacion con empleados
  //relacion con las boletas
}

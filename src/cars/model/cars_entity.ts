import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class CarsEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', nullable: false })
  title: string;

  @Column({ type: 'int', nullable: false })
  price: number;
}

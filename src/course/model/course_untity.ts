import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Course_Entity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', nullable: false })
  title: string;

  @Column({ type: 'varchar', nullable: false })
  price: string;

  @Column({ type: 'varchar', nullable: false })
  author: string;
}

import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ database: 'tp_general', schema: 'city' })
export class City {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
  id: string;

  @Column('varchar', { name: 'city_name', nullable: false })
  cityName: string;

  @Column('bigint', { name: 'country_id', nullable: false })
  countryId: number;
}

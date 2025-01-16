import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ database: 'tp_general', schema: 'district' })
export class District {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
  id: string;

  @Column('varchar', { name: 'district_name', nullable: false })
  districtName: string;

  @Column('bigint', { name: 'city_id', nullable: false })
  cityId: number;
}

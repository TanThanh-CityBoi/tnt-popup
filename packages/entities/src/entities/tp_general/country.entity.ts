import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ database: 'tp_general', schema: 'country' })
export class Country {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
  id: string;

  @Column('varchar', { name: 'name_en', nullable: false })
  nameEn: string;

  @Column('varchar', { name: 'name_vi', nullable: false })
  nameVi: string;

  @Column('varchar', { name: 'short_name', nullable: false })
  shortName: string;
}

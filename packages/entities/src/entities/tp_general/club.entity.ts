import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ database: 'tp_general', schema: 'club' })
export class Club {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
  id: string;

  @Column('varchar', { name: 'name_en', nullable: false })
  nameEn: string;

  @Column('varchar', { name: 'name_vi', nullable: false })
  nameVi: string;

  @Column('varchar', { name: 'key', nullable: false })
  key: string;

  @Column('bigint', { name: 'country_id', nullable: false })
  countryId: number;

  @Column('bigint', { name: 'city_id', nullable: false })
  cityId: number;

  @Column('bigint', { name: 'district_id', nullable: false })
  districtId: number;

  @Column('varchar', { name: 'address', nullable: false })
  address: string;

  @Column('datetime', {
    name: 'open_date',
    nullable: true,
    default: new Date(),
  })
  openDate: Date;

  @Column('datetime', {
    name: 'created_at',
    nullable: true,
    default: new Date(),
  })
  createdAt: Date;

  @Column('bigint', { name: 'created_by', nullable: true })
  createdBy: number;

  @Column('datetime', { name: 'updated_at', nullable: true })
  updatedAt: Date;

  @Column('bigint', { name: 'updated_by', nullable: true })
  updatedBy: number;

  @Column('datetime', { name: 'deleted_at', nullable: true })
  deletedAt: Date;

  @Column('bigint', { name: 'deleted_by', nullable: true })
  deletedBy: number;
}

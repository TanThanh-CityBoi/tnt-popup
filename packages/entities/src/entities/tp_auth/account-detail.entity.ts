import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ database: 'tp_auth', schema: 'account_detail' })
export class AccountDetail {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'id',
  })
  id: number;

  @Column('bigint', {
    name: 'account_id',
    nullable: false,
  })
  accountId: number;

  @Column('varchar', {
    name: 'first_name',
    nullable: true,
  })
  firstName: string;

  @Column('varchar', {
    name: 'last_name',
    nullable: true,
  })
  lastName: string;

  @Column('varchar', {
    name: 'identify_number',
    nullable: true,
  })
  identifyNumber: string;

  @Column('varchar', {
    name: 'address',
    nullable: true,
  })
  address: string;

  @Column('int', {
    name: 'district_id',
    nullable: true,
  })
  districtId: number;

  @Column('int', {
    name: 'city_id',
    nullable: true,
  })
  cityId: number;

  @Column('int', {
    name: 'country_id',
    nullable: true,
  })
  countryId: number;

  @Column('int', {
    name: 'role_id',
    nullable: true,
  })
  roleId: number;

  @Column('varchar', {
    name: 'account_type',
    nullable: true,
  })
  accountType: string;

  @Column('datetime', {
    name: 'created_at',
    nullable: true,
  })
  createdAt: Date;

  @Column('bigint', {
    name: 'created_by',
    nullable: true,
  })
  createdBy: number;

  @Column('datetime', {
    name: 'updated_at',
    nullable: true,
  })
  updatedAt: Date;

  @Column('bigint', {
    name: 'updated_by',
    nullable: true,
  })
  updatedBy: number;

  @Column('datetime', {
    name: 'deleted_at',
    nullable: true,
  })
  deletedAt: Date;

  @Column('bigint', {
    name: 'deleted_by',
    nullable: true,
  })
  deletedBy: number;
}

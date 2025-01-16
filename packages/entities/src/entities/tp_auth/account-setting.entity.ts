import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ database: 'tp_auth', schema: 'account_setting' })
export class AccountSetting {
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
    name: 'account_setting_key',
    nullable: true,
  })
  accountSettingKey: string;

  @Column('text', {
    name: 'account_setting_value_vi',
    nullable: true,
  })
  accountSettingValueVi: string;

  @Column('text', {
    name: 'account_setting_value_en',
    nullable: true,
  })
  accountSettingValueEn: string;

  @Column('tinyint', {
    name: 'is_active',
    nullable: true,
  })
  isActive: boolean;

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

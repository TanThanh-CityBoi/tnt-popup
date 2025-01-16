import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ database: 'tp_auth', schema: 'account_device' })
export class AccountDevice {
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
    name: 'device_uuid',
    nullable: true,
  })
  deviceUuid: string;

  @Column('text', {
    name: 'fcm_token',
    nullable: true,
  })
  fcmToken: string;

  @Column('varchar', {
    name: 'app_version',
    nullable: true,
  })
  appVersion: string;

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

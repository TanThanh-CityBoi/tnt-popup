import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ database: 'tp_device', schema: 'device_info' })
export class DeviceInfo {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'id',
  })
  id: number;

  @Column('bigint', {
    nullable: false,
    name: 'gateway_id',
  })
  gatewayId: number;

  @Column('text', {
    nullable: false,
    name: 'serial',
  })
  serial: string;

  @Column('json', {
    nullable: true,
    name: 'connection',
  })
  connection: object;

  @Column('json', {
    nullable: true,
    name: 'setting',
  })
  setting: object;

  @Column('json', {
    nullable: true,
    name: 'sub_info',
  })
  subInfo: object;

  @Column('datetime', {
    name: 'created_at',
    nullable: true,
  })
  createdAt: Date | null;

  @Column('bigint', {
    name: 'created_by',
    nullable: true,
  })
  createdBy: string | null;

  @Column('datetime', {
    name: 'updated_at',
    nullable: true,
  })
  updatedAt: Date | null;

  @Column('bigint', {
    name: 'updated_by',
    nullable: true,
  })
  updatedBy: string | null;
}

import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ database: 'tp_device', schema: 'gateway_info' })
export class GatewayInfo {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'id',
  })
  id: number;

  @Column('text', {
    nullable: false,
    name: 'code',
  })
  code: string;

  @Column('text', {
    nullable: false,
    name: 'club_key',
  })
  clubKey: string;

  @Column('text', {
    nullable: true,
    name: 'ip',
  })
  ip: string;

  @Column('text', {
    nullable: false,
    name: 'password_hash',
  })
  passwordHash: string;

  @Column('text', {
    nullable: false,
    name: 'password_salt',
  })
  passwordSalt: string;

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

  @Column('tinyint', {
    name: 'is_active',
    nullable: false,
    default: 1,
  })
  isActive: number;

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

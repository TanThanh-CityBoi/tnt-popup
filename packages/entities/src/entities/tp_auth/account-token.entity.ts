import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ database: 'tp_auth', schema: 'account_token' })
export class AccountToken {
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
    name: 'access_token',
    nullable: false,
  })
  accessToken: string;

  @Column('varchar', {
    name: 'refresh_token',
    nullable: false,
  })
  refreshToken: string;

  @Column('tinyint', {
    name: 'is_active',
    default: 1,
    nullable: false,
  })
  isActive: boolean;

  @Column('datetime', {
    name: 'deactive_at',
    nullable: true,
  })
  deactiveAt: Date;

  @Column('varchar', {
    name: 'user_agent',
    nullable: true,
  })
  userAgent: string;

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

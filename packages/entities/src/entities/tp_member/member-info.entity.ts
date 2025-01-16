import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ database: 'tp_member', schema: 'member_info' })
export class MemberInfo {
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

  @Column('bigint', {
    name: 'point',
    default: 0,
    nullable: false,
  })
  point: number;

  @Column('bigint', {
    name: 'bonus_point',
    default: 0,
    nullable: false,
  })
  bonusPoint: number;

  @Column('varchar', {
    name: 'rank',
    nullable: true,
  })
  rank: string;

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

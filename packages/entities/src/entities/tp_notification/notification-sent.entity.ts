import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ database: 'tp_notification', schema: 'notification_sent' })
export class NotificationSent {
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
    name: 'action_id',
    nullable: false,
  })
  actionId: number;

  @Column('tinyint', {
    name: 'is_read',
    default: 0,
    nullable: false,
  })
  isRead: boolean;

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

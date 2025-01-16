import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ database: 'tp_notification', schema: 'action' })
export class Action {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'id',
  })
  id: number;

  @Column('varchar', {
    name: 'action',
    nullable: false,
  })
  action: string;

  @Column('bigint', {
    name: 'mail_template_id',
    nullable: true,
  })
  mailTemplateId: number;

  @Column('bigint', {
    name: 'sms_template_id',
    nullable: true,
  })
  smsTemplateId: number;

  @Column('bigint', {
    name: 'app_template_id',
    nullable: true,
  })
  appTemplateId: number;

  @Column('tinyint', {
    name: 'is_active',
    default: 0,
    nullable: false,
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

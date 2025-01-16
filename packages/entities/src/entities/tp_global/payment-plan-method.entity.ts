import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ database: 'tp_global', schema: 'payment_plan_method' })
export class PaymentPlanMethod {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'id',
  })
  id: number;

  @Column('bigint', {
    name: 'payment_plan_id',
    nullable: false,
  })
  paymentPlanId: number;

  @Column('bigint', {
    name: 'payment_method_id',
    nullable: false,
  })
  paymentMethodId: number;

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

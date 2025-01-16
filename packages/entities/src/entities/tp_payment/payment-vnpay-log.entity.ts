import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ database: 'tp_payment', schema: 'payment_vnpay_log' })
export class PaymentVnpayLog {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
  id: string;

  @Column('bigint', { name: 'account_id', nullable: false })
  accountId: number;

  @Column('varchar', { name: 'bank_code', nullable: false })
  bankCode: string;

  @Column('bigint', { name: 'bank_transaction_number', nullable: false })
  bankTransactionNumber: number;

  @Column('bigint', { name: 'vnp_transaction_number', nullable: false })
  vnpTransactionNumber: number;

  @Column('text', { name: 'vnp_response_code', nullable: true })
  vnpResponseCode: string;

  @Column('varchar', { name: 'vnp_transaction_status', nullable: false })
  vnpTransactionStatus: string;

  @Column('datetime', {
    name: 'created_at',
    nullable: true,
    default: new Date(),
  })
  createdAt: Date;

  @Column('bigint', { name: 'created_by', nullable: true })
  createdBy: number;

  @Column('datetime', { name: 'updated_at', nullable: true })
  updatedAt: Date;

  @Column('bigint', { name: 'updated_by', nullable: true })
  updatedBy: number;

  @Column('datetime', { name: 'deleted_at', nullable: true })
  deletedAt: Date;

  @Column('bigint', { name: 'deleted_by', nullable: true })
  deletedBy: number;
}

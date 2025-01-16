import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ database: 'tp_payment', schema: 'payment_vnpay_token' })
export class PaymentVnpayToken {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
  id: string;

  @Column('bigint', { name: 'account_id', nullable: false })
  accountId: number;

  @Column('varchar', { name: 'card_number', nullable: false })
  cardNumber: string;

  @Column('datetime', { name: 'card_expired_date', nullable: true })
  cardExpiredDate: Date;

  @Column('datetime', { name: 'token_expired_date', nullable: true })
  tokenExpiredDate: Date;

  @Column('varchar', { name: 'card_type', nullable: true })
  cardType: string;

  @Column('varchar', { name: 'bank_code', nullable: false })
  bankCode: string;

  @Column('tinyint', { name: 'is_default', nullable: false, default: true })
  isDefault: boolean;

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

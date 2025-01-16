import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ database: 'tp_general', schema: 'payment_method' })
export class PaymentMethod {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
  id: string;

  @Column('varchar', { name: 'name_en', nullable: false })
  nameEn: string;

  @Column('varchar', { name: 'name_vi', nullable: false })
  nameVi: string;

  @Column('tinyint', { name: 'is_active', nullable: true, default: true })
  isActive: boolean;

  @Column('varchar', { name: 'code', nullable: false })
  code: string;

  @Column('tinyint', {
    name: 'is_apply_for_app',
    nullable: true,
    default: false,
  })
  isApplyForApp: boolean;

  @Column('tinyint', {
    name: 'is_apply_for_pos',
    nullable: true,
    default: false,
  })
  isApplyForPos: boolean;

  @Column('bigint', { name: 'payment_method_group_id', nullable: false })
  paymentMethodGroupId: number;
}

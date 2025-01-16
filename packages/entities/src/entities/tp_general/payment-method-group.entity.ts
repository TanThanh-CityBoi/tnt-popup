import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ database: 'tp_general', schema: 'payment_method_group' })
export class PaymentMethodGroup {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
  id: string;

  @Column('varchar', { name: 'name_en', nullable: false })
  nameEn: string;

  @Column('varchar', { name: 'name_vi', nullable: false })
  nameVi: string;

  @Column('varchar', { name: 'code', nullable: false })
  code: string;
}

import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ database: 'tp_global', schema: 'payment_plan_group' })
export class PaymentPlanGroup {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'id',
  })
  id: number;

  @Column('varchar', {
    name: 'name_en',
    nullable: false,
  })
  nameEn: string;

  @Column('varchar', {
    name: 'name_vi',
    nullable: false,
  })
  nameVi: string;

  @Column('varchar', {
    name: 'description_en',
    nullable: false,
  })
  descriptionEn: string;

  @Column('varchar', {
    name: 'description_vi',
    nullable: false,
  })
  descriptionVi: string;

  @Column('tinyint', {
    name: 'is_active',
    nullable: true,
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

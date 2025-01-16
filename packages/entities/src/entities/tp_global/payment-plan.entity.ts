import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ database: 'tp_global', schema: 'payment_plan' })
export class PaymentPlan {
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
    nullable: true,
  })
  descriptionEn: string;

  @Column('varchar', {
    name: 'description_vi',
    nullable: true,
  })
  descriptionVi: string;

  @Column('bigint', {
    name: 'membership_fee',
    nullable: false,
  })
  membershipFee: number;

  @Column('bigint', {
    name: 'joining_fee',
    nullable: true,
  })
  joiningFee: number;

  @Column('varchar', {
    name: 'color_code',
    nullable: false,
  })
  colorCode: string;

  @Column('varchar', {
    name: 'tag_name_en',
    nullable: true,
  })
  tagNameEn: string;

  @Column('varchar', {
    name: 'tag_name_vi',
    nullable: true,
  })
  tagNameVi: string;

  @Column('varchar', {
    name: 'key',
    nullable: true,
  })
  key: string;

  @Column('tinyint', {
    name: 'is_active',
    nullable: true,
  })
  isActive: boolean;

  @Column('tinyint', {
    name: 'is_subscription',
    nullable: true,
  })
  isSubscription: boolean;

  @Column('tinyint', {
    name: 'is_extra',
    nullable: true,
  })
  isExtra: boolean;

  @Column('tinyint', {
    name: 'is_gift',
    nullable: true,
  })
  isGift: boolean;

  @Column('bigint', {
    name: 'club_id',
    nullable: true,
  })
  clubId: number;

  @Column('tinyint', {
    name: 'is_all_club',
    nullable: true,
  })
  isAllClub: boolean;

  @Column('tinyint', {
    name: 'is_applies_for_web',
    nullable: true,
  })
  isAppliesForWeb: boolean;

  @Column('tinyint', {
    name: 'is_applies_for_app',
    nullable: true,
  })
  isAppliesForApp: boolean;

  @Column('bigint', {
    name: 'payment_plan_group_id',
    nullable: true,
  })
  paymentPlanGroupId: number;

  @Column('varchar', {
    name: 'image_id',
    nullable: true,
  })
  imageId: string;

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

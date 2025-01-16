import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ database: 'tp_global', schema: 'point_package' })
export class PointPackage {
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
    name: 'point',
    nullable: false,
  })
  point: number;

  @Column('bigint', {
    name: 'bonus_point',
    nullable: true,
  })
  bonusPoint: number;

  @Column('bigint', {
    name: 'price',
    nullable: false,
  })
  price: number;

  @Column('varchar', {
    name: 'color_code',
    nullable: false,
  })
  colorCode: string;

  @Column('tinyint', {
    name: 'is_active',
    default: 1,
    nullable: false,
  })
  isActive: boolean;

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

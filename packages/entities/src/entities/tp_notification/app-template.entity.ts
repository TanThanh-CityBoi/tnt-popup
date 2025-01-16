import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ database: 'tp_notification', schema: 'app_template' })
export class AppTemplate {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'id',
  })
  id: number;

  @Column('varchar', {
    name: 'type',
    nullable: false,
  })
  type: string;

  @Column('int', {
    name: 'param_required',
    nullable: false,
  })
  paramRequired: number;

  @Column('varchar', {
    name: 'image',
    nullable: true,
  })
  image: string;

  @Column('text', {
    name: 'title_en',
    nullable: true,
  })
  titleEn: string;

  @Column('text', {
    name: 'title_vi',
    nullable: true,
  })
  titleVi: string;

  @Column('text', {
    name: 'subtitle_en',
    nullable: true,
  })
  subtitleEn: string;

  @Column('text', {
    name: 'subtitle_vi',
    nullable: true,
  })
  subtitleVi: string;

  @Column('longtext', {
    name: 'content_en',
    nullable: true,
  })
  contentEn: string;

  @Column('longtext', {
    name: 'content_vi',
    nullable: true,
  })
  contentVi: string;

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

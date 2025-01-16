import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ database: 'tp_auth', schema: 'permission' })
export class Permission {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'id',
  })
  id: number;

  @Column('varchar', {
    name: 'name',
    nullable: false,
  })
  name: string;

  @Column('varchar', {
    name: 'key',
    nullable: false,
  })
  key: string;

  @Column('bigint', {
    name: 'permission_parent_id',
    nullable: true,
  })
  permissionParentId: number;

  @Column('bigint', {
    name: 'permission_group_id',
    nullable: true,
  })
  permissionGroupId: number;

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

import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ database: 'tp_global', schema: 'access_rule_condition' })
export class AccessRuleCondition {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'id',
  })
  id: number;

  @Column('bigint', {
    name: 'access_rule_id',
    nullable: false,
  })
  accessRuleId: number;

  @Column('varchar', {
    name: 'condition_field',
    nullable: true,
  })
  conditionField: string;

  @Column('varchar', {
    name: 'condition_compare',
    nullable: true,
  })
  conditionCompare: string;

  @Column('text', {
    name: 'condition_value',
    nullable: true,
  })
  conditionValue: string;

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

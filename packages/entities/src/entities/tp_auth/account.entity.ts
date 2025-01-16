import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ database: 'tp_auth', schema: 'account' })
export class Account {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'id',
  })
  id: number;

  @Column('varchar', {
    name: 'email',
    nullable: true,
  })
  email: string;

  @Column('varchar', {
    name: 'phone',
    nullable: false,
  })
  phone: string;

  @Column('text', {
    name: 'password_hash',
    nullable: false,
  })
  passwordHash: string;

  @Column('text', {
    name: 'password_salt',
    nullable: false,
  })
  passwordSalt: string;

  @Column('varchar', {
    name: 'pin',
    nullable: true,
  })
  pin: string;

  @Column('tinyint', {
    name: 'is_active',
    default: 1,
    nullable: true,
  })
  isActive: Boolean;

  @Column('varchar', {
    name: 'registration_channel',
    nullable: true,
  })
  registrationChannel: string;

  @Column('bigint', {
    name: 'facebook_id',
    nullable: true,
  })
  facebookId: string;

  @Column('bigint', {
    name: 'google_id',
    nullable: true,
  })
  googleId: string;

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

import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ database: 'tp_device', schema: 'gateway_token' })
export class GatewayToken {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'id',
  })
  id: number;

  @Column('bigint', {
    nullable: false,
    name: 'gateway_id',
  })
  gatewayId: number;

  @Column('text', {
    nullable: false,
    name: 'access_token',
  })
  accessToken: string;

  @Column('tinyint', {
    name: 'is_active',
    nullable: false,
    default: 1,
  })
  isActive: number;

  @Column('datetime', {
    name: 'created_at',
    nullable: true,
  })
  createdAt: Date | null;

  @Column('datetime', {
    name: 'deactive_at',
    nullable: true,
  })
  deactiveAt: Date | null;
}

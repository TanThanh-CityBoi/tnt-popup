import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ database: 'tp_general', schema: 'general_setting' })
export class GeneralSetting {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
  id: string;

  @Column('varchar', { name: 'setting_key', nullable: false })
  settingKey: string;

  @Column('text', { name: 'setting_value_en', nullable: false })
  settingValueEn: string;

  @Column('text', { name: 'setting_value_vi', nullable: false })
  settingValueVi: string;
}

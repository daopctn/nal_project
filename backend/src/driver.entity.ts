import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'driver' })
export class Driver {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    social_id: string;

    @Column()
    social_provider: string;

    @Column()
    name: string;

    @Column()
    kana: string;

    @Column()
    email: string;
    @Column({ type: 'text', nullable: true })
    wish_prefecture: string;

    @Column({ type: 'text', nullable: true })
    wish_region_code: string;

    @Column({ type: 'varchar', length: 255, nullable: true })
    name2: string;

    @Column({ type: 'varchar', length: 255, nullable: true })
    kana2: string;
    @Column({ type: 'varchar', length: 200, nullable: true })
    license_text: string;

    @Column({ type: 'text', nullable: true })
    wish_type3: string;
}
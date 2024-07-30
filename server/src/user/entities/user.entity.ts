import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Appointment } from "src/appointments/entities/appointment.entity";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ unique: true })
    email: string;

    @Column()
    phone: string;

    @Column({ default: true })
    status: Boolean;

    @OneToMany(() => Appointment, appointment => appointment.user)
    appointments: Appointment[];
}

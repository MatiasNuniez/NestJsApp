import { UserRole } from "src/enums/userRole";
import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Appointment } from "src/appointments/entities/appointment.entity";

@Entity()
export class Doctor {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ unique: true })
    email: string;

    @Column()
    password: string;

    @Column({
        type: 'enum',
        enum: UserRole,
        default: UserRole.DOCTOR
    })
    role?: UserRole;

    @Column()
    phone: string;

    @Column()
    especialidad: string;

    @Column({ default: true })
    status?: Boolean;

    @OneToMany(() => Appointment, appointment => appointment.doctor)
    appointments: Appointment[];
}

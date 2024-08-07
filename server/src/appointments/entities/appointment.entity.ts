import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { statusAppo } from "src/enums/userRole";
import { Doctor } from "src/doctors/entities/doctor.entity";
import { User } from "src/user/entities/user.entity";

@Entity()
export class Appointment {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    userName: string;

    @Column()
    fecha: Date

    @Column({ default: statusAppo.VIGENTE })
    status: statusAppo

    @Column()
    detalles: string;

    @Column()
    hora: string;

    @ManyToOne(() => Doctor, doctor => doctor.appointments)
    @JoinColumn({ name: 'doctor_id' })
    doctor: Doctor;

    @ManyToOne(() => User, user => user.appointments)
    @JoinColumn({ name: 'user_id' })
    user: User;
}

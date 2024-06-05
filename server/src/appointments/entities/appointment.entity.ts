import { Column, Entity, JoinColumn, ManyToOne, } from "typeorm";
import { statusAppo } from "src/enums/userRole";
import { Doctor } from "src/doctors/entities/doctor.entity";
import { User } from "src/users/entities/user.entity";

@Entity()
export class Appointment {

    @Column({ primary: true, generated: true })
    id: number

    @Column()
    fecha: Date

    @Column()
    @ManyToOne(() => Doctor)
    @JoinColumn({ name: 'doctor_id' })
    doctor_id: number

    @Column()
    @ManyToOne(() => User)
    user_id: number

    @Column({
        type: 'enum',
        enum: statusAppo,
        default: statusAppo.VIGENTE,
    })
    status: statusAppo

    @ManyToOne(() => Doctor, doctor => doctor.appointments)
    @JoinColumn({ name: 'doctor_id' })
    doctor: Doctor

    @ManyToOne(() => User, user => user.appointments)
    @JoinColumn({ name: 'user_id' })
    user: User
}

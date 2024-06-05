import { Column, Entity, OneToMany } from "typeorm";
import { UserRole } from "src/enums/userRole";
import { Appointment } from "src/appointments/entities/appointment.entity";

@Entity()
export class User {
    @Column({ primary: true, generated: true })
    id: number;

    @Column()
    name:string

    @Column()
    phone:string

    @Column({ unique: true })
    email: string

    @Column()
    password: string;

    @Column({
        type: 'enum',
        enum: UserRole,
        default: UserRole.USER
    })
    role: UserRole;

    @Column({ default: true })
    status: Boolean;

    @OneToMany(() => Appointment, appointment => appointment.user)
    appointments: Appointment[];
}

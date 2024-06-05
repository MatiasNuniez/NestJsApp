import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { UserRole } from "src/enums/userRole";
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
    password: string;

    @Column()
    phone:string

    @Column({
        type: 'enum',
        enum: UserRole,
        default: UserRole.USER,
    })
    role?: UserRole;

    @Column({ default: true })
    status?: boolean;

    @OneToMany(() => Appointment, appointment => appointment.user)
    appointments: Appointment[];
}

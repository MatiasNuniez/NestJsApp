import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DoctorsModule } from './doctors/doctors.module';
import { AppointmentsModule } from './appointments/appointments.module';
@Module({
  imports: [
    UsersModule,
    DoctorsModule,
    AppointmentsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'nestUser',
      password: '123',
      database: 'nestDb',
      autoLoadEntities:true,
      synchronize: true,
      // Solo en desarrollo el sync porque en producion podemos perder lso datos.
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

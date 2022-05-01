import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { StudentController } from './student.controller';
import { StudentService } from './student.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'SERVICE',
        transport: Transport.TCP,
      },
    ]),
  ],
  controllers: [StudentController],
  providers: [StudentService],
})
export class StudentModule {}

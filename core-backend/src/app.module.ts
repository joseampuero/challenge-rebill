import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentController } from './student/student.controller';
import { StudentService } from './student/student.service';
import { StudentModule } from './student/student.module';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'SERVICE',
        transport: Transport.TCP,
        options: {
          port: 3100,
        },
      },
    ]),
    StudentModule,
  ],
  controllers: [AppController, StudentController],
  providers: [AppService, StudentService],
})
export class AppModule {}

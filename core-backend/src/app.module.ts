import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentController } from './student/student.controller';
import { StudentService } from './student/student.service';
import { StudentModule } from './student/student.module';
import { ScoreController } from './score/score.controller';
import { ScoreService } from './score/score.service';
import { ScoreModule } from './score/score.module';

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
    ScoreModule,
  ],
  controllers: [AppController, StudentController, ScoreController],
  providers: [AppService, StudentService, ScoreService],
})
export class AppModule {}

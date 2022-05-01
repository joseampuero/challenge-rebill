import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ScoreController } from './score.controller';
import { ScoreService } from './score.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'SERVICE',
        transport: Transport.TCP,
      },
    ]),
  ],
  controllers: [ScoreController],
  providers: [ScoreService],
})
export class ScoreModule {}

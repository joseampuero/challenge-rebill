import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class StudentService {
  constructor(
    // @Inject('COMMUNICATION') private readonly communiccationClien: ClientProxy,
    @Inject('SERVICE') private readonly serviceClient: ClientProxy,
  ) {}

  getAll() {
    return this.serviceClient.send({ cmd: 'get-students' }, {});
  }
}

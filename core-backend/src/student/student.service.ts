import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { StudentRequest } from './studentRequest.dto';

@Injectable()
export class StudentService {
  constructor(@Inject('SERVICE') private readonly serviceClient: ClientProxy) {}

  getAll() {
    return this.serviceClient.send({ cmd: 'get-students' }, {});
  }

  create(studentRequest: StudentRequest) {
    return this.serviceClient.send({ cmd: 'new-student' }, studentRequest);
  }

  update(id: number, studentRequest: StudentRequest) {
    return this.serviceClient.send(
      { cmd: 'update-student' },
      { id, studentRequest },
    );
  }

  delete(id: number) {
    return this.serviceClient.send({ cmd: 'delete-student' }, { id });
  }

  getAverage(id: number) {
    return this.serviceClient.send({ cmd: 'average' }, { id });
  }
}

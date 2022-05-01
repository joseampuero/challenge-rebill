export class StudentAverageDTO {
  constructor(course: string, professor: string, score: number) {
    this.course = course;
    this.professor = professor;
    this.score = score;
  }
  course: string;
  professor: string;
  score: number;
}

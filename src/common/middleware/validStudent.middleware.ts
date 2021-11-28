import { Injectable, NestMiddleware, HttpException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { students } from '../../db';

@Injectable()
export class ValidStudentMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('This MIDDLEWARE was CALLED');
    const studentId = req.params.studentId;
    const studentExists = students.some((student) => {
      return student.id === studentId;
    });
    if (!studentExists) {
      throw new HttpException('Students not found', 400);
    }
    next();
  }
}

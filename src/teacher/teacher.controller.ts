import { Controller, Get, Param, Put } from '@nestjs/common';
import { FindTeacherResponseDto } from './dto/teacher.dto';
import { TeacherService } from './teacher.service';

@Controller('teachers')
export class TeacherController {
  constructor(private readonly teacherService: TeacherService) {}
  @Get()
  getTeacher(): FindTeacherResponseDto[] {
    return this.teacherService.getTeachers();
  }

  @Get('/:teacherId')
  getStudentById(
    @Param('teacherId') teacherId: string,
  ): FindTeacherResponseDto {
    return this.teacherService.getTeacherById(teacherId);
  }
}

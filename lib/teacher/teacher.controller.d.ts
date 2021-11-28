import { FindTeacherResponseDto } from './dto/teacher.dto';
import { TeacherService } from './teacher.service';
export declare class TeacherController {
    private readonly teacherService;
    constructor(teacherService: TeacherService);
    getTeacher(): FindTeacherResponseDto[];
    getStudentById(teacherId: string): FindTeacherResponseDto;
}

import { CreateStudentDto, FindStudentResponseDto, StudentResponseDto, UpdateStudentDto } from './dto/student.dto';
export declare class StudentService {
    private students;
    getStudents(): FindStudentResponseDto[];
    getStudentById(studentId: string): FindStudentResponseDto;
    createStudent(payload: CreateStudentDto): StudentResponseDto;
    updateStudent(payload: UpdateStudentDto, id: string): StudentResponseDto;
    getStudentsByTeacherId(teacherId: string): FindStudentResponseDto[];
    updateStudentTeacher(teacherId: string, studentId: string): StudentResponseDto;
}

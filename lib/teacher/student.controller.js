"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentTeacherController = void 0;
const common_1 = require("@nestjs/common");
const student_dto_1 = require("../student/dto/student.dto");
const student_service_1 = require("../student/student.service");
let StudentTeacherController = class StudentTeacherController {
    constructor(studentService) {
        this.studentService = studentService;
    }
    getStudents(teacherId) {
        return this.studentService.getStudentsByTeacherId(teacherId);
    }
    updateStudentTeacher(teacherId, studentId) {
        return this.studentService.updateStudentTeacher(teacherId, studentId);
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Param)('teacherId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Array)
], StudentTeacherController.prototype, "getStudents", null);
__decorate([
    (0, common_1.Put)('/:studentId'),
    __param(0, (0, common_1.Param)('teacherId')),
    __param(1, (0, common_1.Param)('studentId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", student_dto_1.StudentResponseDto)
], StudentTeacherController.prototype, "updateStudentTeacher", null);
StudentTeacherController = __decorate([
    (0, common_1.Controller)('teachers/:teacherId/students'),
    __metadata("design:paramtypes", [student_service_1.StudentService])
], StudentTeacherController);
exports.StudentTeacherController = StudentTeacherController;
//# sourceMappingURL=student.controller.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidStudentMiddleware = void 0;
const common_1 = require("@nestjs/common");
const db_1 = require("../../db");
let ValidStudentMiddleware = class ValidStudentMiddleware {
    use(req, res, next) {
        console.log('This MIDDLEWARE was CALLED');
        const studentId = req.params.studentId;
        const studentExists = db_1.students.some((student) => {
            return student.id === studentId;
        });
        if (!studentExists) {
            throw new common_1.HttpException('Students not found', 400);
        }
        next();
    }
};
ValidStudentMiddleware = __decorate([
    (0, common_1.Injectable)()
], ValidStudentMiddleware);
exports.ValidStudentMiddleware = ValidStudentMiddleware;
//# sourceMappingURL=validStudent.middleware.js.map
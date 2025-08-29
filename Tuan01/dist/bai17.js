"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
class Logger {
    // constructor private để ngăn tạo đối tượng mới bên ngoài
    constructor() { }
    // phương thức static để lấy instance duy nhất
    static getInstance() {
        return Logger.instance;
    }
    log(message) {
        console.log(`Logger:${message}`);
    }
}
exports.Logger = Logger;
Logger.instance = new Logger();

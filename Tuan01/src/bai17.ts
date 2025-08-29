export class Logger {
  private static instance: Logger=new Logger();

  // constructor private để ngăn tạo đối tượng mới bên ngoài
  private constructor() {}

  // phương thức static để lấy instance duy nhất
  public static getInstance(): Logger {
    return Logger.instance;
  }
  public log(message: string): void {
    console.log(`Logger:${message}`);
  }
}

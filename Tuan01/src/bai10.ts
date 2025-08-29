export class Account {
    public username: string;
    private password: string;
    readonly id: string;// chi gan gia tri duoc 1 lan duy nhat
  
    constructor(username: string, password: string, id: string) {
      this.username = username;
      this.password = password;
      this.id = id;
    }
  }
  
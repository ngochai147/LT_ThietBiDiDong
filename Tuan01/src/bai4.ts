export class Rectangle{
    width:number;
    height:number;

    constructor(width:number,height:number){
        this.width=width;
        this.height=height;
    }

    calculateArea(){
        return this.width*this.height
    }

    
    calculatePerimeter(){
        return 2*(this.width+this.height)
    }
}
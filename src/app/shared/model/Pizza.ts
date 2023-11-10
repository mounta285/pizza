import { Ingredient } from "./ingredient";

export class Pizza{
    private name: string;
    private img: string;
    private desc: string;
    private ingredients: Ingredient[] | undefined

    constructor(name: string, img: string, desc: string,ingredient?: Ingredient[]){
        this.name = name;
        this.img = img;
        this.desc = desc;
        this.ingredients =ingredient;
    }
    getName():string {
        return this.name;
    }
    setName(name: string): void {
        this.name = name;
    }
    getImg():string {
        return this.img;
    }
    setImg(img: string):void {
        this.img = img;
    }
    getDesc():string {
        return this.desc;
    }
    setDesc(desc: string):void {
        this.desc = desc;
        }
}
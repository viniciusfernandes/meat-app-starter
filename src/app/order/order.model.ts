import { OrderItem } from "./order-item.model";

export class Order{
    public id:number;
    public value:number;
    public orderItems:OrderItem[];
    constructor(){}
    
}
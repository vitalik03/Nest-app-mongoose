import { Injectable } from '@nestjs/common';
import { IProduct } from './interface/product.interface';

@Injectable()
export class ProductsService {
    async getAll(){
        const products = await [
            {
                id: 1,
                name: 'apple',
                description: 'some description'
            },
            {
                id: 2,
                name: 'banana',
                description: 'some description'
            }
        ];
        return products;
    }
    async create(item: IProduct){
        const new_item = item;
        return await new_item;
    }

    async createOnPut(item: IProduct){
        const new_item = item;
        return await new_item;
    }

    async Ondelete(){
        return 'sucess';
    }
}

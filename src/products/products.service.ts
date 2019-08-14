import { Injectable } from '@nestjs/common';
import { IProduct } from './interface/product.interface';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ProductsService {
    constructor(@InjectModel('Product') readonly productModel){}
    async addProduct(item: IProduct){
        const new_product = this.productModel(item);
        return await new_product.save();
    }

    async getProducts(){
        const products = await this.productModel.find();
        return products;
    }

    async deleteProduct(name: string){
        const params = {
            name
        }
        await this.productModel.findOneAndDelete(params);
        return "success";
    }

    async updateProduct(product: IProduct){
        const name = product.name;
        const params = {
            name
        }
        const description = product.description;
        const aparams = {
            description
        }
        const updated = await this.productModel.findOneAndUpdate(params,aparams,{new: true});
        return updated; 
    }

}

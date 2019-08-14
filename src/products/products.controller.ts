import { Controller, Get, Post, Body, Put, Delete  } from '@nestjs/common';
import { IProduct } from './interface/product.interface';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService){}
    @Get()
      getProducts(): Promise<IProduct[]> {
        return this.productsService.getProducts();
      }
    
    @Post()
      addProduct(@Body() createItem: CreateProductDto): Promise<IProduct> {
        return this.productsService.addProduct(createItem);
      } 

    @Delete()
      deleteProduct(@Body() createUser: CreateProductDto){
        return this.productsService.deleteProduct(createUser.name);
      }
      
    @Put()
      updateProduct(@Body() product: CreateProductDto): Promise<IProduct>{
        return this.productsService.updateProduct(product);
      }

}

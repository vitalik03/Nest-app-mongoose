import { Controller, Get, Post, Body, Put, Delete  } from '@nestjs/common';
import { IProduct } from './interface/product.interface';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService){}
    @Get()
      getAll(): Promise<IProduct[]> {
        return this.productsService.getAll();
      }
    
    @Post()
      create(@Body() createItem: CreateProductDto): Promise<IProduct> {
        return this.productsService.create(createItem);
      }
    
    @Put()
      createOnPut(@Body() createItem: CreateProductDto): Promise<IProduct> {
        return this.productsService.createOnPut(createItem);
      }
    
    @Delete()
      Ondelete(){
          return this.productsService.Ondelete();
      }
}

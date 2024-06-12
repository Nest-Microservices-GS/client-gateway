import { Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { PRODUCT_SERVICE } from 'src/config';


@Controller('products')
export class ProductsController {
  constructor(
    @Inject(PRODUCT_SERVICE) private readonly productsClient: ClientProxy
  ) {}

  @Post()
  createProduct() {
    return 'Producto creado';
  }

  @Get()
  findProducts() {
    return this.productsClient.send({cmd: 'find_all_products'},{});
  }

  @Get(':id')
  findOne(@Param('id') id: string ) {
    return this.productsClient.send({cmd: 'find_one_product'},{ id })
  }
}

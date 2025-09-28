import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller('products')
export class ProductsController {
    @MessagePattern('get_product')
    getProduct(id: number) {
        return { id, name: 'Product 1', price: 1000 };
    }
}

import { Controller } from '@nestjs/common';
import { EventPattern, MessagePattern } from '@nestjs/microservices';

@Controller('products')
export class ProductsController {
    @MessagePattern('get_product')
    getProduct(id: number) {
        return { id, name: 'Product 1', price: 1000 };
    }

    @EventPattern('order.created')
    async updateStock(order: { id: number; productId: number; }) {
        console.log( 'Checking stock for product', order.productId);
        console.log({message: 'Stock updated'});
    }
}

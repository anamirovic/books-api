import { Controller, Post, Body, Get, Param, ParseIntPipe } from '@nestjs/common';
import { PurchasesService } from './purchases.service';
import { PurchaseDto } from './entities/purchase.dto';

@Controller('purchases')
export class PurchasesController {
  constructor(private readonly purchasesService: PurchasesService) {}

  @Post()
  async createPurchase(@Body() purchaseDto: PurchaseDto) {
    return this.purchasesService.createPurchase(purchaseDto);
  }

  @Get(':id')
  async getPurchaseById(@Param('id', ParseIntPipe) id: number) {
    return this.purchasesService.getPurchaseById(id);
  }

}
import { PartialType } from '@nestjs/mapped-types';
import { CreateCoffeeDto } from './create-coffee.dto';

// PartialType maps all of the fields as optional
export class UpdateCoffeeDto extends PartialType(CreateCoffeeDto) {}

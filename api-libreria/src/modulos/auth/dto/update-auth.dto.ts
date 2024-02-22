import { PartialType } from '@nestjs/mapped-types';
import { RegisterCreateAuthDto } from './create-auth.dto';

export class UpdateAuthDto extends PartialType(RegisterCreateAuthDto) {}

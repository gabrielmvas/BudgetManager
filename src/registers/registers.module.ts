import { Module } from '@nestjs/common';
import { RegistersService } from './registers.service';
import { RegistersController } from './registers.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Register, RegisterSchema } from 'src/schemas/register.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Register.name,
        schema: RegisterSchema,
      }
    ])
  ],
  controllers: [RegistersController],
  providers: [RegistersService]
})
export class RegistersModule {}

import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateRegisterDto } from './dto/create-register.dto';
import { UpdateRegisterDto } from './dto/update-register.dto';
import { Register, RegisterDocument } from 'src/schemas/register.schema';

@Injectable()
export class RegistersService {

  constructor(@InjectModel(Register.name) private readonly registerModel: Model<RegisterDocument>) {}

  create(createRegisterDto: CreateRegisterDto) {
    const register = new this.registerModel(createRegisterDto)
    return register.save();
  }

  findAll() {
    return this.registerModel.find();
  }

  findOne(id: number) {
    return this.registerModel.findById(id);
  }

  update(id: number, updateRegisterDto: UpdateRegisterDto) {
    return this.registerModel.findByIdAndUpdate(id, updateRegisterDto);
  }

  remove(id: number) {
    return this.registerModel.remove(id);
  }
}

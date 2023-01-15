import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type RegisterDocument = Register & Document;

@Schema({
  timestamps: { createdAt: 'created', updatedAt: 'updated' },
})
export class Register {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  category: string;

  @Prop({ required: true })
  type: string;

  @Prop({ required: true })
  value: number;

  @Prop({ required: true })
  date: Date;
}

export const RegisterSchema = SchemaFactory.createForClass(Register);
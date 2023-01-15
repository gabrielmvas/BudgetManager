import {
    IsNotEmpty,
    IsString,
    IsNumber,
    MaxLength,
    MinLength,
    IsDateString
} from 'class-validator';

export class CreateRegisterDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(2)
    title: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(2)
    @MaxLength(300)
    description: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(2)
    @MaxLength(80)
    category: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(2)
    @MaxLength(80)
    type: string;

    @IsNumber()
    @IsNotEmpty()
    value: number;

    @IsDateString()
    @IsNotEmpty()
    date: number;

}

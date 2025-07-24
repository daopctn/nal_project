import { IsString, IsNotEmpty, Matches, IsEmail } from 'class-validator';

export class UpdateDriverDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    @Matches(/^[\u30A0-\u30FFー\s]+$/, {
        message: 'Kana phải là Katakana',
    })
    kana: string;

    @IsEmail({}, { message: 'Email không hợp lệ' })
    email: string;

    @IsString()
    @IsNotEmpty()
    @Matches(/^[\u30A0-\u30FFー\s]+$/, {
        message: 'Kana phải là Katakana',
    })
    kana2: string;
}
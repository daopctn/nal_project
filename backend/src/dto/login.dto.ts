import { IsNotEmpty, Matches } from 'class-validator';

export class LoginDto {
  @IsNotEmpty({ message: 'Username không được để trống' })
  username: string;

  @IsNotEmpty({ message: 'Password không được để trống' })
  @Matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, {
    message:
      'Password phải chứa ít nhất 8 ký tự, gồm ít nhất 1 chữ cái và 1 chữ số',
  })
  password: string;
}

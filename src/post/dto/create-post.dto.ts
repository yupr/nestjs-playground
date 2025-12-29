import { IsString, IsBoolean, IsOptional, IsEmail } from 'class-validator';

export class CreatePostDto {
  @IsString()
  title: string;

  @IsString()
  content: string;

  @IsBoolean()
  @IsOptional()
  published?: boolean;

  @IsEmail()
  authorEmail: string;
}

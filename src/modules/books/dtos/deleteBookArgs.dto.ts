import { IsNotEmpty, IsString } from 'class-validator';

export class DeleteBookArgsDto {
  @IsString()
  @IsNotEmpty()
  id: string;
}

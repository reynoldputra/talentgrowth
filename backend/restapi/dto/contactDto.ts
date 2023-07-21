import { IsNotEmpty, IsString } from "class-validator"

export class ContactDTO {
  @IsString()
  @IsNotEmpty()
  firstName!: string

  @IsString()
  @IsNotEmpty()
  lastName!: string

  @IsString()
  @IsNotEmpty()
  numberPhone!: string

  @IsString()
  @IsNotEmpty()
  address!: string
}

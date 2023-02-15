import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  // Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

import { UserService } from '../services/user.service';
import { CreateUserDto, UpdateUserDto } from '../dto/user.dto';

@ApiTags('users')
@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  @ApiOperation({ summary: 'List of users' })
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.userService.findOne(id);
  }

  @Get(':id/accounts')
  findAccountsByUser(@Param('id', ParseIntPipe) id: number) {
    return this.userService.findAccountsByUser(id);
  }

  @Get(':idUser/account/:idAccount/movements')
  findMovementsByAccountByUser(
    @Param('idUser', ParseIntPipe) idUser: number,
    @Param('idAccount', ParseIntPipe) idAccount: number,
  ) {
    return this.userService.findMovementsByAccountByUser(idUser, idAccount);
  }

  @Post()
  create(@Body() data: CreateUserDto) {
    return this.userService.create(data);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() data: UpdateUserDto) {
    return this.userService.update(id, data);
  }

  // @Delete(':id')
  // remove(@Param('id', ParseIntPipe) id: number) {
  //   return this.userService.remove(id);
  // }
}

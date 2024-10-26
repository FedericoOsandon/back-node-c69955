import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus, Query, Request } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ConfigService } from '@nestjs/config';
// htpp://localhost:3000 /users
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService, private config: ConfigService) {}

  @Post('/:b')
  probarRequest(@Request() req) {
    console.log(req.query)
    console.log(req.params)
    console.log(req.body)
    return 'todo en un objeto '
  }

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    if(!createUserDto.email || !createUserDto.password) throw new HttpException('Incomplete values', HttpStatus.BAD_REQUEST)
    return await this.usersService.create(createUserDto);
  }

  @Get()
  async findAll(@Query() query) {
    // const { limit } = query
    console.log(this.config.get<string>('NOMBRE_ADMIN'))
    const users =  await this.usersService.findAll();
    return { status: 'success', payload: users }
  }
  // findAll(@Query('limit') limit) {
 
  //   console.log(limit)
  //   const users =  this.usersService.findAll();
  //   return { status: 'success', payload: users }
  // }
  // htpp://localhost:3000 /users/:uid -> 31321a
  @Get(':id')
  findOne(@Param('id') id: string) {
    if(isNaN(+id)) throw new HttpException('Invalid param', HttpStatus.BAD_REQUEST)

    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}

import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findAll() {
    return await this.userRepository.find();
  }

  async findOne(id: number) {
    try {
      return await this.userRepository.findOneOrFail({
        where: { id },
      });
    } catch {
      throw new NotFoundException('User not found.');
    }
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.userRepository.preload({
      id,
      ...updateUserDto,
    });

    if (!user) {
      throw new NotFoundException(`Reservation #${id} not found.`);
    }

    return user;
  }

  async remove(id: number) {
    return this.update(id, { isActive: false });
  }
}

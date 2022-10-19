import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { TypeOrmExModule } from './typeorm-ex.module';
import { TaskRepository } from './task.repository';

@Module({
  imports: [TypeOrmExModule.forCustomRepository([TaskRepository])],
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}

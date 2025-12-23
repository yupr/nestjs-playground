import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { PostModule } from './post/post.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [CatsModule, PrismaModule, PostModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

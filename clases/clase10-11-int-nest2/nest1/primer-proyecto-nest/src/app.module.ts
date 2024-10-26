import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
//// última importación 

import { MongooseModule } from '@nestjs/mongoose';
import FirtsMiddleware from './middlewares/fristMiddleware';
import { ConfigModule, ConfigService } from '@nestjs/config'


@Module({
  // imports: [MongooseModule.forRoot('mongodb://localhost:27017/c69955nest'), UsersModule],
  imports: [UsersModule, ConfigModule.forRoot(), MongooseModule.forRootAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: async(config: ConfigService) => ({
      uri: config.get<string>('MONGO_URL')
    })
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(FirtsMiddleware).forRoutes({path: '*', method: RequestMethod.ALL})
  }
}


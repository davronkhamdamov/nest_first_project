import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { CarsModul } from './cars/cars_module';
import { UserModule } from './users/users_module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: 'postgres://yaroqtpl:4G89UjXWtR0geEsSXmNjIaPWLau884ov@mahmud.db.elephantsql.com/yaroqtpl',
      autoLoadEntities: true,
      synchronize: true,
    }),
    CarsModul,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

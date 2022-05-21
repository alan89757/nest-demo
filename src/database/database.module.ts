import { Module, DynamicModule } from '@nestjs/common';
import { createDatabaseProvider } from './database.providers';
import { Connection  } from './connection.provider';

@Module({
  providers: [Connection]
})
export class DatabaseModule {
  static forRoot(entities = [], options?): DynamicModule {
    const providers = createDatabaseProvider(options, entities);
    return {
      module: DatabaseModule,
    }
  }
}

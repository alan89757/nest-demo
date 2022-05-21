import { Test, TestingModule } from '@nestjs/testing';
import { TigerController } from './tiger.controller';

describe('TigerController', () => {
  let controller: TigerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TigerController],
    }).compile();

    controller = module.get<TigerController>(TigerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

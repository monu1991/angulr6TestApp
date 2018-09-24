import { InventoryListModule } from './inventory-list.module';

describe('InventoryListModule', () => {
  let inventoryListModule: InventoryListModule;

  beforeEach(() => {
    inventoryListModule = new InventoryListModule();
  });

  it('should create an instance', () => {
    expect(inventoryListModule).toBeTruthy();
  });
});

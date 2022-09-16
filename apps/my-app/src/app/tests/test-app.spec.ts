import { TestBed } from '@angular/core/testing';
import { DataState, IDataIds } from '@features';
import { NgxsModule, Store } from '@ngxs/store';

const ids: IDataIds = {
  id: 'test',
  externalId: 'test',
};

describe('Data State', () => {
  let store: Store;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        NgxsModule.forRoot([DataState], {
          developmentMode: true,
        }),
      ],
      teardown: { destroyAfterEach: false },
    }).compileComponents();

    store = TestBed.inject(Store);
  });
});

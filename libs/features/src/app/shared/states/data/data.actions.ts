import { IDataIds } from '@shared/interfaces/data.interface';

export class ResetDataIds {
  static readonly type = '[Data] Reset data ids';
}

export class SetDataIds {
  static readonly type = '[Data] Set data ids';
  constructor(public payload: { ids: IDataIds }) {}
}

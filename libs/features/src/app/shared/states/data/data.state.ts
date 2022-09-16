import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { IDataIds } from '@shared/interfaces/data.interface';
import * as Data from '@shared/states/data/data.actions';

export interface DataStateModel {
  ids: IDataIds;
}

@State<DataStateModel>({
  name: 'data',
  defaults: {
    ids: null,
  },
})
@Injectable()
export class DataState {
  @Selector()
  static getDataIds(state: DataStateModel): IDataIds {
    return state.ids;
  }

  @Action(Data.SetDataIds)
  setDataId(
    ctx: StateContext<DataStateModel>,
    action: Data.SetDataIds
  ): void {
    ctx.setState({
      ...ctx.getState(),
      ids: action.payload.ids,
    });
  }

  @Action(Data.ResetDataIds)
  resetDataId(ctx: StateContext<DataStateModel>): void {
    ctx.setState({
      ...ctx.getState(),
      ids: null,
    });
  }
}

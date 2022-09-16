import { Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { IDataIds } from '@shared/interfaces/data.interface';
import { DataState } from '@shared/states/data/data.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'workspace-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @Select(DataState.getDataIds) ids$: Observable<IDataIds>;

  title = 'my-app';
}

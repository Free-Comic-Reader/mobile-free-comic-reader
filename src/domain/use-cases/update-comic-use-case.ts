import {Comic} from '../model/comic';

export interface UpdateComicUseCase {
  run(params: UpdateComicUseCase.Params): Promise<UpdateComicUseCase.Result>;
}

export namespace UpdateComicUseCase {
  export type Params = Comic;
  export type Result = Comic;
}

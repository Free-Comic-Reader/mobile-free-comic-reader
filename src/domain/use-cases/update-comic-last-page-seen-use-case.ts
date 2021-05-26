import {Comic} from '../model/comic';

export interface UpdateComicLastPageSeenUseCase {
  run(
    params: UpdateComicLastPageSeenUseCase.Params,
  ): Promise<UpdateComicLastPageSeenUseCase.Result>;
}

export namespace UpdateComicLastPageSeenUseCase {
  export type Params = Pick<Comic, 'id' | 'lastPageSeen'>;
  export type Result = Comic;
}

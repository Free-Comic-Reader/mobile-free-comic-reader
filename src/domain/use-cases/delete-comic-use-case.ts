import {Comic} from '../model/comic';

export interface DeleteComicUseCase {
  run(params: DeleteComicUseCase.Params): Promise<void>;
}

export namespace DeleteComicUseCase {
  export type Params = Pick<Comic, 'id'>;
}

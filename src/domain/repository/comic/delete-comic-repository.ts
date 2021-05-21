import {Comic} from '../../model/comic';

export interface DeleteComicRepository {
  deleteComic(params: DeleteComicRepository.Params): Promise<void>;
}

export namespace DeleteComicRepository {
  export type Params = Pick<Comic, 'id'>;
}

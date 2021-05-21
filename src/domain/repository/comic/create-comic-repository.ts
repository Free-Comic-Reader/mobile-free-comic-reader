import {Comic} from '../../model/comic';

export interface CreateComicRepository {
  createComic(
    params: CreateComicRepository.Params,
  ): Promise<CreateComicRepository.Result>;
}

export namespace CreateComicRepository {
  export type Params = Omit<Comic, 'id'>;
  export type Result = Comic;
}

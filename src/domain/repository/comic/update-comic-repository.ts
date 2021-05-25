import {Comic} from '../../model/comic';

export interface UpdateComicRepository {
  update(
    params: UpdateComicRepository.Params,
  ): Promise<UpdateComicRepository.Result>;
}

export namespace UpdateComicRepository {
  export type Params = Comic;
  export type Result = Comic;
}

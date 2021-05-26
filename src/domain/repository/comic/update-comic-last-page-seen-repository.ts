import {Comic} from '../../model/comic';

export interface UpdateComicLastPageSeenRepository {
  update(
    params: UpdateComicLastPageSeenRepository.Params,
  ): Promise<UpdateComicLastPageSeenRepository.Result>;
}

export namespace UpdateComicLastPageSeenRepository {
  export type Params = Pick<Comic, 'id' | 'lastPageSeen'>;
  export type Result = Comic;
}

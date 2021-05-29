import {Comic} from '../../model/comic';

export interface ExistsComicRepository {
  exists(params: ExistsComicRepository.Params): Promise<Boolean>;
}

export namespace ExistsComicRepository {
  export type Params = Pick<Comic, 'id'>;
}

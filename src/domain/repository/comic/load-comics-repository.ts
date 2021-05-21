import {Comic} from '../../model/comic';

export interface LoadComicsRepository {
  loadComics(): Promise<LoadComicsRepository.Result>;
}

export namespace LoadComicsRepository {
  export type Result = Comic[];
}

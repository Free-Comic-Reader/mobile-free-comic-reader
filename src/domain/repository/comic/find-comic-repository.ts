import {Comic} from '../../model/comic';

export interface FindComicRepository {
  find(params: FindComicRepository.Params): Promise<FindComicRepository.Result>;
}

export namespace FindComicRepository {
  export type Params = {title: string};
  export type Result = Comic[];
}

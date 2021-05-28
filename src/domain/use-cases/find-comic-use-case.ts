import {Comic} from '../model/comic';

export interface FindComicUseCase {
  run(params: FindComicUseCase.Params): Promise<FindComicUseCase.Result>;
}

export namespace FindComicUseCase {
  export type Params = {title: string};
  export type Result = Comic[];
}

import {Comic} from '../model/comic';

export interface LoadComicsUseCase {
  run(): Promise<LoadComicsUseCase.Result>;
}

export namespace LoadComicsUseCase {
  export type Result = {
    lastSeen: Comic[];
    comics: Comic[];
  };
}

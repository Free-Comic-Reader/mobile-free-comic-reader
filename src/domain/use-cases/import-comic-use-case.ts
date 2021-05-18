import {Comic} from '../model/comic';

export interface ImportComicUseCase {
  run(param: ImportComicUseCase.Param): Promise<ImportComicUseCase.Response>;
}

export namespace ImportComicUseCase {
  export type Param = {filePath: string};
  export type Response = Comic;
}

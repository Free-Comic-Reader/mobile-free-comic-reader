import {Comic} from '../model/comic';

export interface ImportComicUseCase {
  run(params: ImportComicUseCase.Params): Promise<ImportComicUseCase.Response>;
}

export namespace ImportComicUseCase {
  export type Params = {filePath: string};
  export type Response = Comic;
}

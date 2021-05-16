import {Comic} from '../model/comic';

export interface ImportComicUseCase {
  run(filePath: string): Promise<ImportComicUseCase.ImportResult>;
}

export namespace ImportComicUseCase {
  export type ImportResult = Comic;
}

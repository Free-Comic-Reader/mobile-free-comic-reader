import {Comic} from '../model/comic';

export interface LoadComicContentUseCase {
  run(params: LoadComicContentUseCase.Params): Promise<string[]>;
}

export namespace LoadComicContentUseCase {
  export type Params = Pick<Comic, 'filePath'>;
}

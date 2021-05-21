import {Comic} from '../../../domain/model/comic';
import {LoadComicsRepository} from '../../../domain/repository/comic/load-comics-repository';
import ComicRepositorySpy from '../../test/create-comic-repository-spy';

export interface LoadComicListUseCase {
  run(): Promise<LoadComicListUseCase.Result>;
}

export namespace LoadComicListUseCase {
  export type Result = Comic[];
}

class LoadComicsUseCaseLocal implements LoadComicListUseCase {
  constructor(private loadComics: LoadComicsRepository) {}

  run(): Promise<LoadComicListUseCase.Result> {
    return Promise.resolve([]);
  }
}

describe('Load Comic List Use Case Test', () => {
  it('Should return comic list if successful', async () => {
    // const comicRepositorySpy = new ComicRepositorySpy();
    // const useCase = new LoadComicsUseCaseLocal(comicRepositorySpy);
    // const comics = await useCase.run();
    // expect(comics).toEqual([]);
  });
});

import {Comic} from '../../../domain/model/comic';

export interface FindComicRepository {
  find(params: FindComicRepository.Params): Promise<FindComicRepository.Result>;
}

export namespace FindComicRepository {
  export type Params = {title: string};
  export type Result = Comic[];
}

class FindComicRepositorySpy implements FindComicRepository {
  error?: Error;
  params?: FindComicRepository.Params;
  result?: FindComicRepository.Result;

  async find(
    params: FindComicRepository.Params,
  ): Promise<FindComicRepository.Result> {
    this.params = params;

    if (this.error) {
      return Promise.reject(this.error);
    }

    if (this.result) {
      return Promise.resolve(this.result);
    } else {
      return Promise.reject(new Error('Simulation error'));
    }
  }
}

export interface FindComicUseCase {
  run(params: FindComicUseCase.Params): Promise<FindComicUseCase.Result>;
}

export namespace FindComicUseCase {
  export type Params = {title: string};
  export type Result = Comic[];
}

class FindComicUseCaseLocal implements FindComicUseCase {
  constructor(private repository: FindComicRepository) {}

  run(params: FindComicUseCase.Params): Promise<FindComicUseCase.Result> {
    return this.repository.find(params);
  }
}

describe('Find comic use case', () => {
  it('Should return comics if find successful', async () => {
    const repository = new FindComicRepositorySpy();
    repository.result = [
      {id: '1', name: 'Dororo', filePath: 'temp/comics/dororo'},
      {id: '2', name: 'Beserker', filePath: 'temp/comics/beserker'},
    ];

    const useCase = new FindComicUseCaseLocal(repository);
    const result = await useCase.run({title: 'any'});

    expect(repository.params).toEqual({title: 'any'});
    expect(result).toEqual([
      {id: '1', name: 'Dororo', filePath: 'temp/comics/dororo'},
      {id: '2', name: 'Beserker', filePath: 'temp/comics/beserker'},
    ]);
  });

  it('Should return empty result if find not matching', () => {});

  it('Thow error if find fail', () => {});
});

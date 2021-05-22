import {Comic} from '../../../domain/model/comic';
import {DeleteComicRepository} from '../../../domain/repository/comic/delete-comic-repository';
import DeleteComicRepositorySpy from '../../test/delete-comic-repository-spy';

export interface DeleteComicUseCase {
  run(params: DeleteComicUseCase.Params): Promise<void>;
}

export namespace DeleteComicUseCase {
  export type Params = Pick<Comic, 'id'>;
}

class DeleteComicUseCaseLocal implements DeleteComicUseCase {
  constructor(private repository: DeleteComicRepository) {}

  run(params: DeleteComicUseCase.Params): Promise<void> {
    return this.repository.deleteComic(params);
  }
}

describe('Delete comic use case', () => {
  it('Delete comic if successful', async () => {
    const repository = new DeleteComicRepositorySpy();
    const useCase = new DeleteComicUseCaseLocal(repository);

    await useCase.run({id: '332'});

    expect(repository.params).toEqual({id: '332'});
  });

  it('Throw error if delete comic fail', async () => {
    const repository = new DeleteComicRepositorySpy();
    repository.error = new Error('Simulation error');

    const useCase = new DeleteComicUseCaseLocal(repository);

    await expect(useCase.run({id: '2'})).rejects.toEqual(
      Error('Simulation error'),
    );
  });
});

import DeleteComicRepositorySpy from '../../test/delete-comic-repository-spy';
import DeleteComicUseCaseLocal from './delete-comic-use-case-local';

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

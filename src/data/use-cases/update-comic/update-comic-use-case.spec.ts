import UpdateComicRepositorySpy from '../../test/update-comic-repository-spy';
import UpdateComicUseCaseLocal from './update-comic-use-case-local';

describe('Update comic use case test', () => {
  it('Should update comic infos if successful', async () => {
    const repositorySpy = new UpdateComicRepositorySpy();
    repositorySpy.result = {
      id: 'aa22',
      filePath: 'temp/comics/dororo',
      name: 'Dororo',
      lastPageSeen: 3,
    };

    const useCase = new UpdateComicUseCaseLocal(repositorySpy);
    const updatedComic = await useCase.run({
      id: 'aa22',
      filePath: 'temp/comics/dororo',
      name: 'Dororo',
    });

    expect(updatedComic).toEqual({
      id: 'aa22',
      filePath: 'temp/comics/dororo',
      name: 'Dororo',
      lastPageSeen: 3,
    });
  });

  it('Throw error if update comic infos fail', async () => {
    const repositorySpy = new UpdateComicRepositorySpy();
    repositorySpy.error = new Error('Simulation error');

    const useCase = new UpdateComicUseCaseLocal(repositorySpy);

    await expect(
      useCase.run({
        id: 'aa23',
        filePath: 'temp/comics/test',
        name: 'Test',
      }),
    ).rejects.toEqual(Error('Simulation error'));
  });
});

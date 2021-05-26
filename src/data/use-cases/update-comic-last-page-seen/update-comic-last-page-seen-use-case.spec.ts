import UpdateComicLastPageSeenRepositorySpy from '../../test/update-comic-last-page-seen-repository-spy';
import UpdateComicLastPageSeenUseCaseLocal from './update-comic-last-page-seen-use-case-local';

describe('Update comic last page seen use case', () => {
  it('Update last page seen if successful', async () => {
    const repository = new UpdateComicLastPageSeenRepositorySpy();
    repository.result = {
      id: '122',
      filePath: 'docs/comics/one_punch_man',
      name: 'One Punch Man',
    };

    const useCase = new UpdateComicLastPageSeenUseCaseLocal(repository);
    const updatedComic = await useCase.run({id: '122', lastPageSeen: 4});

    expect(updatedComic).toEqual({
      id: '122',
      filePath: 'docs/comics/one_punch_man',
      name: 'One Punch Man',
      lastPageSeen: 4,
    });
  });

  it('Throw error if last page seen if fail', async () => {
    const repository = new UpdateComicLastPageSeenRepositorySpy();
    repository.error = new Error('Simulation error');

    const useCase = new UpdateComicLastPageSeenUseCaseLocal(repository);

    await expect(useCase.run({id: '122', lastPageSeen: 4})).rejects.toEqual(
      Error('Simulation error'),
    );
  });
});

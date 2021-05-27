import ClearAllLastPageSeenUseCaseLocal from './clear-all-last-page-seen-use-case-local';
import ClearAllLastPageSeenRepositorySpy from '../../test/clear-all-last-page-seen-spy';

describe('Clear all last page seen use case', () => {
  it('Should clear all last page seen if successful', async () => {
    const repository = new ClearAllLastPageSeenRepositorySpy();
    const useCase = new ClearAllLastPageSeenUseCaseLocal(repository);

    await expect(useCase.run()).resolves.not.toThrow();
  });

  it('Thow error if clear all last page seen fail', async () => {
    const repository = new ClearAllLastPageSeenRepositorySpy();
    repository.error = new Error('Simulation error');

    const useCase = new ClearAllLastPageSeenUseCaseLocal(repository);

    await expect(useCase.run()).rejects.toEqual(Error('Simulation error'));
  });
});

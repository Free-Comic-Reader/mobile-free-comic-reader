import FileManagerSpy from '../../test/file-manager-spy';
import CalculateStoredSizeUseCaseLocal from './calculate-stored-size-use-case-local';

describe('Calculate stored size use case', () => {
  it('Return total stored size if successful', async () => {
    const fileManager = new FileManagerSpy();
    fileManager.size = 1024;

    const useCase = new CalculateStoredSizeUseCaseLocal(fileManager);
    const storedSize = await useCase.run();

    expect(storedSize).toEqual(1024);
  });

  it('Throw error if total stored size if fail', async () => {
    const fileManager = new FileManagerSpy();
    fileManager.error = new Error('Simulation error');

    const useCase = new CalculateStoredSizeUseCaseLocal(fileManager);

    await expect(useCase.run()).rejects.toEqual(Error('Simulation error'));
  });
});

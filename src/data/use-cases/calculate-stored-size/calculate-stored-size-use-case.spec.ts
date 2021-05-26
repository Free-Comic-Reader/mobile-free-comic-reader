import {FileManager} from '../../protocols/file-manager';
import FileManagerSpy from '../../test/file-manager-spy';

export interface CalculateStoredSizeUseCase {
  run(): Promise<number>;
}

class CalculateStoredSizeUseCaseLocal implements CalculateStoredSizeUseCase {
  constructor(private fileManager: FileManager) {}

  run(): Promise<number> {
    return this.fileManager.storedSize();
  }
}

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

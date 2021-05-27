import {CalculateStoredSizeUseCase} from '../../../domain/use-cases/calculate-stored-size-use-case';
import {FileManager} from '../../protocols/file-manager';

class CalculateStoredSizeUseCaseLocal implements CalculateStoredSizeUseCase {
  constructor(private fileManager: FileManager) {}

  run(): Promise<number> {
    return this.fileManager.storedSize();
  }
}

export default CalculateStoredSizeUseCaseLocal;

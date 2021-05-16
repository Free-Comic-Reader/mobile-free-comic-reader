import {FileManagerSpy} from '../../test/file-manager-spy';
import {LocalImportComicUseCase} from './local-import-comic';

describe('Import Comic Use Case Test', () => {
  it('Import comic if import sucessfull', async () => {
    const spyFileManager = new FileManagerSpy();
    spyFileManager.importedFilePath = 'documents/comics/one_punch_man';

    const importComicUseCase = new LocalImportComicUseCase(spyFileManager);

    await expect(
      importComicUseCase.import({filePath: 'test/one_punch_man.cbr'}),
    ).resolves.toEqual('documents/comics/one_punch_man');

    expect(spyFileManager.filePath).toEqual('test/one_punch_man.cbr');
  });

  it('Throw error if import comic fail', async () => {
    const spyDecompress = new FileManagerSpy();
    spyDecompress.error = new Error('Simulation error');

    const importComicUseCase = new LocalImportComicUseCase(spyDecompress);

    await expect(
      importComicUseCase.import({filePath: 'test/one_punch_man.cbr'}),
    ).rejects.toEqual(Error('Simulation error'));
  });
});

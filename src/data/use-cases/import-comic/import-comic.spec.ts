import {FileManagerSpy} from '../../test/file-manager-spy';
import {LocalImportComicUseCase} from './local-import-comic';

describe('Import Comic Use Case Test', () => {
  it('Should return comic if import sucessfull', async () => {
    const spyFileManager = new FileManagerSpy();
    spyFileManager.importedFilePath = 'documents/comics/one_punch_man';

    const importComicUseCase = new LocalImportComicUseCase(spyFileManager);
    const comic = await importComicUseCase.import('test/one_punch_man.cbr');

    expect(comic).toEqual({
      name: 'one_punch_man',
      path: 'documents/comics/one_punch_man',
    });

    expect(spyFileManager.filePath).toEqual('test/one_punch_man.cbr');
  });

  it('Throw error if import fail', async () => {
    const spyFileManager = new FileManagerSpy();
    spyFileManager.error = new Error('Simulation error');

    const importComicUseCase = new LocalImportComicUseCase(spyFileManager);

    await expect(
      importComicUseCase.import('test/one_punch_man.cbr'),
    ).rejects.toEqual(Error('Simulation error'));
  });
});

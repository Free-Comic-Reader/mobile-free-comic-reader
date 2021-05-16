import ComicRepositorySpy from '../../test/comic-repository-spy';
import FileManagerSpy from '../../test/file-manager-spy';
import ImportComicUseCaseLocal from './import-comic-local';

describe('Import Comic Use Case Test', () => {
  it('Should return comic if import sucessfull', async () => {
    const fileManagerSpy = new FileManagerSpy();
    fileManagerSpy.importedFilePath = 'documents/comics/one_punch_man';

    const comicRepositorySpy = new ComicRepositorySpy();

    const importComicUseCase = new ImportComicUseCaseLocal(
      fileManagerSpy,
      comicRepositorySpy,
    );
    const comic = await importComicUseCase.run('test/one_punch_man.cbr');

    expect(comic).toEqual({
      name: 'one_punch_man',
      path: 'documents/comics/one_punch_man',
    });

    expect(comicRepositorySpy.comic).toEqual({
      name: 'one_punch_man',
      path: 'documents/comics/one_punch_man',
    });

    expect(fileManagerSpy.filePath).toEqual('test/one_punch_man.cbr');
  });

  it('Generate file name even with the directory being the root path', async () => {
    const fileManagerSpy = new FileManagerSpy();
    fileManagerSpy.importedFilePath = 'documents/comics/one_punch_man_001';

    const comicRepositorySpy = new ComicRepositorySpy();

    const importComicUseCase = new ImportComicUseCaseLocal(
      fileManagerSpy,
      comicRepositorySpy,
    );

    const comic = await importComicUseCase.run('one_punch_man_001.cbr');

    expect(comic).toEqual({
      name: 'one_punch_man_001',
      path: 'documents/comics/one_punch_man_001',
    });
  });

  it('Throw error if import fail', async () => {
    const fileManagerSpy = new FileManagerSpy();
    fileManagerSpy.error = new Error('Simulation error');

    const comicRepositorySpy = new ComicRepositorySpy();

    const importComicUseCase = new ImportComicUseCaseLocal(
      fileManagerSpy,
      comicRepositorySpy,
    );

    await expect(
      importComicUseCase.run('test/one_punch_man.cbr'),
    ).rejects.toEqual(Error('Simulation error'));
  });

  it('Throw error if repository fail', async () => {
    const fileManagerSpy = new FileManagerSpy();
    const comicRepositorySpy = new ComicRepositorySpy();
    comicRepositorySpy.error = new Error('Repository simulation error');

    const importComicUseCase = new ImportComicUseCaseLocal(
      fileManagerSpy,
      comicRepositorySpy,
    );

    await expect(
      importComicUseCase.run('test/one_punch_man.cbr'),
    ).rejects.toEqual(Error('Repository simulation error'));
  });
});

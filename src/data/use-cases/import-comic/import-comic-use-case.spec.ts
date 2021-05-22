import CreateComicRepositorySpy from '../../test/create-comic-repository-spy';
import FileManagerSpy from '../../test/file-manager-spy';
import ImportComicUseCaseLocal from './import-comic-use-case-local';

describe('Import comic use case test', () => {
  it('Should return comic if import sucessfull', async () => {
    const fileManagerSpy = new FileManagerSpy();
    fileManagerSpy.importedFilePath = 'documents/comics/one_punch_man';

    const createComicRepositorySpy = new CreateComicRepositorySpy();
    createComicRepositorySpy.result = {
      id: '1',
      name: 'one_punch_man',
      filePath: 'test/one_punch_man.cbr',
    };

    const importComicUseCase = new ImportComicUseCaseLocal(
      fileManagerSpy,
      createComicRepositorySpy,
    );

    const comic = await importComicUseCase.run({
      filePath: 'test/one_punch_man.cbr',
    });

    expect(comic).toEqual({
      filePath: 'test/one_punch_man.cbr',
      id: '1',
      name: 'one_punch_man',
    });

    expect(createComicRepositorySpy.params).toEqual({
      name: 'one_punch_man',
      filePath: 'documents/comics/one_punch_man',
    });

    expect(fileManagerSpy.filePath).toEqual('test/one_punch_man.cbr');
  });

  it('Throw error if import fail', async () => {
    const fileManagerSpy = new FileManagerSpy();
    fileManagerSpy.error = new Error('Simulation error');

    const createComicRepositorySpy = new CreateComicRepositorySpy();

    const importComicUseCase = new ImportComicUseCaseLocal(
      fileManagerSpy,
      createComicRepositorySpy,
    );

    await expect(
      importComicUseCase.run({filePath: 'test/one_punch_man.cbr'}),
    ).rejects.toEqual(Error('Simulation error'));
  });

  it('Throw error if repository fail', async () => {
    const fileManagerSpy = new FileManagerSpy();
    const createComicRepositorySpy = new CreateComicRepositorySpy();
    createComicRepositorySpy.error = new Error('Repository simulation error');

    const importComicUseCase = new ImportComicUseCaseLocal(
      fileManagerSpy,
      createComicRepositorySpy,
    );

    await expect(
      importComicUseCase.run({filePath: 'test/one_punch_man.cbr'}),
    ).rejects.toEqual(Error('Repository simulation error'));
  });
});

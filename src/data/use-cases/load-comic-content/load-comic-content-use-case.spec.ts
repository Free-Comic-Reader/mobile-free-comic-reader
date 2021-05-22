import FileManagerSpy from '../../test/file-manager-spy';
import LoadComicContentUseCaseLocal from './load-comic-content-use-case-local';

describe('Load Comic Content Use Case Test', () => {
  it('Should return files load successful', async () => {
    const fileManagerSpy = new FileManagerSpy();
    fileManagerSpy.files = ['file://temp/file.jpg'];

    const useCase = new LoadComicContentUseCaseLocal(fileManagerSpy);
    const files = await useCase.run({filePath: 'temp/comic.cbr'});

    expect(files).toEqual(['file://temp/file.jpg']);
    expect(fileManagerSpy.filePath).toEqual('temp/comic.cbr');
  });

  it('Throw error if load fail', async () => {
    const fileManagerSpy = new FileManagerSpy();
    fileManagerSpy.error = new Error('Error simulation');

    const useCase = new LoadComicContentUseCaseLocal(fileManagerSpy);

    await expect(useCase.run({filePath: 'temp/comic.cbr'})).rejects.toEqual(
      Error('Error simulation'),
    );
  });
});

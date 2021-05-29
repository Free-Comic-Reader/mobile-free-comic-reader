import ComicDatabaseSpy from '../../test/comic-database-spy';
import CreateComicRepositoryLocal from './create-comic-repository-local';

describe('Create comic repository', () => {
  it('Should return data if create successful', async () => {
    const databaseSpy = new ComicDatabaseSpy();
    databaseSpy.result = {
      name: 'Dororo',
      filePath: 'temp/dororo',
      lastPageSeen: 1,
    };

    const repository = new CreateComicRepositoryLocal(databaseSpy);

    const newData = await repository.createComic({
      name: 'Dororo',
      filePath: 'temp/dororo',
    });

    expect(newData).toEqual({
      name: 'Dororo',
      filePath: 'temp/dororo',
      lastPageSeen: 1,
    });
  });

  it('Throw error if create fail', async () => {
    const databaseSpy = new ComicDatabaseSpy();
    databaseSpy.error = new Error('Simulation Error');

    const repository = new CreateComicRepositoryLocal(databaseSpy);

    await expect(
      repository.createComic({
        name: 'Dororo',
        filePath: 'temp/dororo',
      }),
    ).rejects.toEqual(Error('Simulation Error'));
  });
});

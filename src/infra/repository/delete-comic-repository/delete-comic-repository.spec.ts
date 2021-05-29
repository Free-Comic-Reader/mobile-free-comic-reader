import ComicDatabaseSpy from '../../test/comic-database-spy';
import DeleteComicRepositoryLocal from './delete-comic-repository-local';

describe('Delete comic repository', () => {
  it('Should return data if create successful', async () => {
    const databaseSpy = new ComicDatabaseSpy();
    const repository = new DeleteComicRepositoryLocal(databaseSpy);

    await repository.deleteComic({id: '123'});

    expect(databaseSpy.identifier).toEqual('123');
  });

  it('Throw error if create fail', async () => {
    const databaseSpy = new ComicDatabaseSpy();
    databaseSpy.error = new Error('Simulation Error');

    const repository = new DeleteComicRepositoryLocal(databaseSpy);

    await expect(repository.deleteComic({id: '123'})).rejects.toEqual(
      Error('Simulation Error'),
    );
  });
});

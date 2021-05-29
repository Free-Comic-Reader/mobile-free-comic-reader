import ComicDatabaseSpy from '../../test/comic-database-spy';
import ExistsComicRepositoryLocal from './exists-comic-repository-local';

describe('Exists comic repository', () => {
  it('Should return true if comics exists', async () => {
    const database = new ComicDatabaseSpy();
    database.result = true;

    const repository = new ExistsComicRepositoryLocal(database);
    const exists = await repository.exists({id: '123'});

    expect(exists).toBeTruthy();
    expect(database.identifier).toEqual('123');
  });

  it('Should return false if comics exists', async () => {
    const database = new ComicDatabaseSpy();
    database.result = false;

    const repository = new ExistsComicRepositoryLocal(database);
    const exists = await repository.exists({id: '123'});

    expect(exists).toBeFalsy();
  });

  it('Throw error if exists fail', async () => {
    const database = new ComicDatabaseSpy();
    database.error = new Error('Simulation error');

    const repository = new ExistsComicRepositoryLocal(database);

    await expect(repository.exists({id: '123'})).rejects.toEqual(
      Error('Simulation error'),
    );
  });
});

import LoadComicsRepositorySpy from '../../test/load-comics-repository-spy';
import LoadComicsUseCaseLocal from './load-comics-use-case-local';

describe('Load comics use case test', () => {
  it('Should return comics if successful', async () => {
    const repositorySpy = new LoadComicsRepositorySpy();
    repositorySpy.result = {
      lastSeen: [{id: '10', name: 'Dororo', filePath: 'temp/dororo'}],
      comics: [
        {id: '1', name: 'One Punch Man', filePath: 'temp/one_punch_man'},
        {id: '2', name: 'The Boys', filePath: 'temp/the_boys'},
      ],
    };

    const useCase = new LoadComicsUseCaseLocal(repositorySpy);
    const comics = await useCase.run();

    expect(comics).toEqual({
      lastSeen: [{id: '10', name: 'Dororo', filePath: 'temp/dororo'}],
      comics: [
        {id: '1', name: 'One Punch Man', filePath: 'temp/one_punch_man'},
        {id: '2', name: 'The Boys', filePath: 'temp/the_boys'},
      ],
    });
  });

  it('Throw error if load comics fail', async () => {
    const repositorySpy = new LoadComicsRepositorySpy();
    repositorySpy.error = new Error('Simulation error');

    const useCase = new LoadComicsUseCaseLocal(repositorySpy);

    await expect(useCase.run()).rejects.toEqual(Error('Simulation error'));
  });
});

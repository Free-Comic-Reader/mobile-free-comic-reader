import FindComicRepositorySpy from '../../test/find-comic-repository-spy';
import FindComicUseCaseLocal from './find-comic-use-case-local';

describe('Find comic use case', () => {
  it('Should return comics if find successful', async () => {
    const repository = new FindComicRepositorySpy();
    repository.result = [
      {id: '1', name: 'Dororo', filePath: 'temp/comics/dororo'},
      {id: '2', name: 'Beserker', filePath: 'temp/comics/beserker'},
    ];

    const useCase = new FindComicUseCaseLocal(repository);
    const result = await useCase.run({title: 'any'});

    expect(repository.params).toEqual({title: 'any'});
    expect(result).toEqual([
      {id: '1', name: 'Dororo', filePath: 'temp/comics/dororo'},
      {id: '2', name: 'Beserker', filePath: 'temp/comics/beserker'},
    ]);
  });

  it('Thow error if find fail', async () => {
    const repository = new FindComicRepositorySpy();
    repository.error = new Error('Simulation error');

    const useCase = new FindComicUseCaseLocal(repository);

    await expect(useCase.run({title: 'any'})).rejects.toEqual(
      Error('Simulation error'),
    );
  });
});

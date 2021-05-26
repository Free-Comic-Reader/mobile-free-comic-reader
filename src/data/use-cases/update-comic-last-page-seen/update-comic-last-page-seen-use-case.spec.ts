import {Comic} from '../../../domain/model/comic';
import UpdateComicLastPageSeenRepositorySpy from '../../test/update-comic-last-page-seen-repository-spy';

export interface UpdateComicLastPageSeenUseCase {
  run(
    params: UpdateComicLastPageSeenUseCase.Params,
  ): Promise<UpdateComicLastPageSeenUseCase.Result>;
}

export namespace UpdateComicLastPageSeenUseCase {
  export type Params = Pick<Comic, 'id' | 'lastPageSeen'>;
  export type Result = Comic;
}

export interface UpdateComicLastPageSeenRepository {
  update(
    params: UpdateComicLastPageSeenRepository.Params,
  ): Promise<UpdateComicLastPageSeenRepository.Result>;
}

export namespace UpdateComicLastPageSeenRepository {
  export type Params = Pick<Comic, 'id' | 'lastPageSeen'>;
  export type Result = Comic;
}

class UpdateComicLastPageSeenUseCaseLocal
  implements UpdateComicLastPageSeenUseCase
{
  constructor(private repository: UpdateComicLastPageSeenRepository) {}

  async run(params: UpdateComicLastPageSeenUseCase.Params): Promise<Comic> {
    return this.repository.update(params);
  }
}

describe('Update comic last page seen use case', () => {
  it('Update last page seen if successful', async () => {
    const repository = new UpdateComicLastPageSeenRepositorySpy();
    repository.result = {
      id: '122',
      filePath: 'docs/comics/one_punch_man',
      name: 'One Punch Man',
    };

    const useCase = new UpdateComicLastPageSeenUseCaseLocal(repository);
    const updatedComic = await useCase.run({id: '122', lastPageSeen: 4});

    expect(updatedComic).toEqual({
      id: '122',
      filePath: 'docs/comics/one_punch_man',
      name: 'One Punch Man',
      lastPageSeen: 4,
    });
  });
});

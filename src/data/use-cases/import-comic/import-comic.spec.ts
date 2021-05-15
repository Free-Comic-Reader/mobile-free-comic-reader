export interface ImportComicUseCase {
  import({filePath}: ImportComicUseCase.Params): Promise<void>;
}

export namespace ImportComicUseCase {
  export type Params = {
    filePath: string;
  };
}

interface Decompress {
  extractor({filePath, destination}: Decompress.Params): Promise<void>;
}

namespace Decompress {
  export type Params = {
    filePath: string;
    destination: string;
  };
}

export class SpyComicDecompress implements Decompress {
  filePath?: string;
  destination?: string;
  error?: Error;

  extractor({filePath, destination}: Decompress.Params): Promise<void> {
    this.filePath = filePath;
    this.destination = destination;

    if (this.error) {
      return Promise.reject(this.error);
    }

    return Promise.resolve();
  }
}

class RemoteImportComicUseCase implements ImportComicUseCase {
  constructor(private decompress: Decompress) {}

  async import({filePath}: ImportComicUseCase.Params): Promise<void> {
    return this.decompress.extractor({filePath, destination: ''});
  }
}

describe('Import Comic Use Case Test', () => {
  it('Import comic if sucessfull', async () => {
    const spyDecompress = new SpyComicDecompress();
    const importComicUseCase = new RemoteImportComicUseCase(spyDecompress);

    await expect(
      importComicUseCase.import({filePath: 'test/one_punch_man.cbr'}),
    ).resolves.not.toThrow();

    expect(spyDecompress.filePath).toEqual('test/one_punch_man.cbr');
    expect(spyDecompress.destination).toEqual('temp/one_punch_man');
  });

  it('Throw error if import comic fail', async () => {
    const spyDecompress = new SpyComicDecompress();
    spyDecompress.error = new Error('Simulation error');

    const importComicUseCase = new RemoteImportComicUseCase(spyDecompress);

    await expect(
      importComicUseCase.import({filePath: 'test/one_punch_man.cbr'}),
    ).rejects.toEqual(Error('Simulation error'));
  });
});

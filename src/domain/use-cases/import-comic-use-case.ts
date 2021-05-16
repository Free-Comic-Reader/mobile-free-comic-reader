export interface ImportComicUseCase {
  import({filePath}: ImportComicUseCase.Params): Promise<string>;
}

export namespace ImportComicUseCase {
  export type Params = {
    filePath: string;
  };
}

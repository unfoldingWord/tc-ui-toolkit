import * as TcUiToolkit from './index';

describe('tc-ui-toolkit', () => {
  it('should have exports', () => {
    expect(typeof TcUiToolkit).toEqual('object');
  });

  it('should not do undefined exports', () => {
    Object.keys(TcUiToolkit).forEach(exportKey =>
      expect(Boolean(TcUiToolkit[exportKey])).toBeTruthy(),
    );
  });
});

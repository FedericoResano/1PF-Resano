import { TransformNombrePipe } from './transform-nombre.pipe';

describe('TransformNombrePipe', () => {
  it('create an instance', () => {
    const pipe = new TransformNombrePipe();
    expect(pipe).toBeTruthy();
  });
});

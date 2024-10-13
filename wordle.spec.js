const { wordle } = require('./wordle');

describe('wordle', () => {
  it('example #1', () => {
    const result = wordle('horse', 'human');
    expect(result).toBe('!****');
  });

  it('example #2', () => {
    const result = wordle('horse', 'hotel');
    expect(result).toBe('!!*?*');
  });

  it('example #3', () => {
    const result = wordle('horse', 'house');
    expect(result).toBe('!!*!!');
  });

  it('example #4', () => {
    const result = wordle('horse', 'horse');
    expect(result).toBe('!!!!!');
  });

  it('example #5', () => {
    const result = wordle('drake', 'awake');
    expect(result).toBe('**!!!');
  });

  it('example #6', () => {
    const result = wordle('abbbb', 'caaaa');
    expect(result).toBe('*?***');
  });

  it('example #7', () => {
    const result = wordle('ababc', 'babad');
    expect(result).toBe('????*');
  });
});

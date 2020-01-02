import getData from '../../utils/getData';

describe('Fetch API', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  //npm i jest-fetch-mock --save-dev
  test('Llamar una API y retornar datos', () => {
    fetch.mockResponseOnce(JSON.stringify({ data: '12345' }));

    getData('https://google.com').then(response => {
      expect(response.data).toEqual('12345');
    });

    expect(fetch.mock.calls[0][0]).toEqual('https://google.com');
  });
});

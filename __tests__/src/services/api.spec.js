import api from "~/services/api.js";
import sinon from "sinon";

describe("Api service tests", () => {
  test('should call api', () => {
    const apiSpy = sinon.stub(api, 'get');

    api.get('/deputados?siglaUf=CE&ordem=ASC&ordenarPor=nome');

    expect(apiSpy.calledOnce).toBe(true);

    apiSpy.restore();
  });
});

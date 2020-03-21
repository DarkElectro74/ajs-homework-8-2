import ErrorRepository from '../ErrorRepository';

test('Добавление ошибки', () => {
  const received = new ErrorRepository();
  received.errorSet('222', 'error222');
  expect(received.translate('222')).toBe('error222');
});

test('Неизвестная ошибка', () => {
  const received = new ErrorRepository();
  received.errorSet('error', 'error');
  expect(received.translate('333')).toBe('Unknown error');
});

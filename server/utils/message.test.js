const expect = require('expect');

const { generateMessage, generateLocationMessage } = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    const from = 'Kelly';
    const text = 'Hello';
    const message = generateMessage(from, text);
    expect(message).toInclude({ from, text });
    expect(message.createdAt).toBeA('number');
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    const from = 'Kelly';
    const latitude = 10;
    const longitude = 20;
    const url = 'https://www.google.com/maps?q=10,20';
    const message = generateLocationMessage(from, latitude, longitude);

    expect(message).toInclude({ from, url });
    expect(message.createdAt).toBeA('number');
  });
});

import Daemon from '../Daemon';

const daemon = new Daemon('Hellscream', 'Daemon', 100, 1, 25, 25);
test('levelUp character Daemon', () => {
  const expected = {
    name: 'Hellscream', type: 'Daemon', health: 100, level: 2, attack: 30, defence: 30,
  };
  const received = daemon.levelUp();
  expect(received).toEqual(expected);
});

test('Damage character Daemon', () => {
  const expected = 65;
  daemon.damage(50);
  const received = daemon.health;
  expect(received).toBe(expected);
});

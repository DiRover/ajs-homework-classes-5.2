import Magician from '../Magician';

const magician = new Magician('Hattabich', 'Magician', 100, 1, 25, 25);
test('levelUp character Magician', () => {
  const expected = {
    name: 'Hattabich', type: 'Magician', health: 100, level: 2, attack: 30, defence: 30,
  };
  const received = magician.levelUp();
  expect(received).toEqual(expected);
});

test('Damage character Magician', () => {
  const expected = 65;
  magician.damage(50);
  const received = magician.health;
  expect(received).toBe(expected);
});

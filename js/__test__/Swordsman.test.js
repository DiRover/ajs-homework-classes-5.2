import Swordsman from '../Swordsman';

const swordsman = new Swordsman('Knife', 'Swordsman', 100, 1, 25, 25);
test('levelUp character Swordsman', () => {
  const expected = {
    name: 'Knife', type: 'Swordsman', health: 100, level: 2, attack: 30, defence: 30,
  };
  const received = swordsman.levelUp();
  expect(received).toEqual(expected);
});

test('Damage character Swordsman', () => {
  const expected = 65;
  swordsman.damage(50);
  const received = swordsman.health;
  expect(received).toBe(expected);
});

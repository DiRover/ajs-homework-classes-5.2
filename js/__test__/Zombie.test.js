import Zombie from '../Zombie';

const zombie = new Zombie('Brainlover', 'Zombie', 100, 1, 25, 25);
test('levelUp character Zombie', () => {
  const expected = {
    name: 'Brainlover', type: 'Zombie', health: 100, level: 2, attack: 30, defence: 30,
  };
  const received = zombie.levelUp();
  expect(received).toEqual(expected);
});

test('Damage character Zombie', () => {
  const expected = 65;
  zombie.damage(50);
  const received = zombie.health;
  expect(received).toBe(expected);
});

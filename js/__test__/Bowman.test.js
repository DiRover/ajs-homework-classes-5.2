import Bowman from '../Bowman';

const bowman = new Bowman('Bob', 'Bowman', 100, 1, 25, 25);
test('levelUp character Bowman', () => {
  const expected = {
    name: 'Bob', type: 'Bowman', health: 100, level: 2, attack: 30, defence: 30,
  };
  const received = bowman.levelUp();
  expect(received).toEqual(expected);
});

test('Damage character Bowman', () => {
  const expected = 65;
  bowman.damage(50);
  const received = bowman.health;
  expect(received).toBe(expected);
});

import Undead from '../Undead';

const undead = new Undead('Stinky', 'Undead', 100, 1, 25, 25);
test('levelUp character Undead', () => {
  const expected = {
    name: 'Stinky', type: 'Undead', health: 100, level: 2, attack: 30, defence: 30,
  };
  const received = undead.levelUp();
  expect(received).toEqual(expected);
});

test('Damage character Undead', () => {
  const expected = 65;
  undead.damage(50);
  const received = undead.health;
  expect(received).toBe(expected);
});

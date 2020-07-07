class Character {
  constructor(name, type, health, level, attack, defence) {
    if (typeof name === 'string' && name.length >= 2 && name.length <= 10) {
      this.name = name;
    } else {
      throw new Error('Name is not valid!');
    }
    if (type === 'Bowman' || type === 'Swordsman' || type === 'Magician' || type === 'Daemon' || type === 'Undead' || type === 'Zombie') {
      this.type = type;
    } else {
      throw new Error('Type is not valid!');
    }
    this.type = type;
    this.health = health;
    this.level = level;
    this.attack = attack;
    this.defence = defence;
  }

  levelUp() {
    if (this.health !== 0) {
      this.level += 1;
      this.attack *= 1.2;
      this.defence *= 1.2;
      this.health = 100;
      return {
        name: this.name,
        type: this.type,
        health: this.health,
        level: this.level,
        attack: this.attack,
        defence: this.defence,
      };
    }
    throw new Error('Сharacter is dead!');
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
    } else {
      throw new Error('Сharacter is dead!');
    }
  }
}
export default Character;

export default class Team {
  constructor() {
    this.heroes = [
      {
        name: 'Лучник',
        type: 'Bowman',
        health: 50,
        level: 1,
        attack: 40,
        defence: 10,
      },
      {
        name: 'Маг',
        type: 'Magician',
        health: 50,
        level: 1,
        attack: 40,
        defence: 10,
      },
      {
        name: 'Мечник',
        type: 'Swordman',
        health: 50,
        level: 1,
        attack: 40,
        defence: 10,
      },
    ];
  }

  [Symbol.iterator]() {
    let index = -1;
    const team = this.heroes;

    return {
      next() {
        index += 1;
        if (index < team.length) {
          return {
            value: team[index].type,
            done: !(index in team),
          };
        }
        return {
          done: !(index in team),
        };
      },
    };
  }
}

const test1 = new Team();
for (const i of test1) { console.log(i); }

// return {
//     next: () => ({ value: team[++index].type, done: !(index in team) }),
//   };

/* Groups */

class Group {
  constructor() {
    this.group = [];
  }

  add(value) {
    if (this.group.indexOf(value) === -1) {
      this.group.push(value);
    }
  }

  delete(value) {
    let index = this.group.indexOf(value);
    if (index !== -1) {
      this.group.splice(index, 1);
    }
  }

  has(value) {
    return this.group.indexOf(value) !== -1;
  }

  static from(iterable) {
    let group = new Group();
    for (let item of iterable) {
      group.add(item);
    }
    return group;
  }
}

function groupTest() {
  let group = new Group();
  group.add(1);
  group.add(2);
  group.add(2);
  group.add(3);

  console.log(group);
  group.delete(3);
  console.log(group);
  console.log(group.has(1));

  group = Group.from([7, 8, 8, 9]);
  console.log(group);
}

groupTest();

/* Iterable Groups */

class Group {
  constructor() {
    this.members = [];
  }

  add(value) {
    if (this.members.indexOf(value) === -1) {
      this.members.push(value);
    }
  }

  delete(value) {
    let index = this.members.indexOf(value);
    if (index !== -1) {
      this.members.splice(index, 1);
    }
  }

  has(value) {
    return this.members.indexOf(value) !== -1;
  }

  [Symbol.iterator]() {
    return new GroupIterator(this);
  }

  static from(iterable) {
    let group = new Group();
    for (let item of iterable) {
      group.add(item);
    }
    return group;
  }
}

class GroupIterator {
  constructor(group) {
    this.group = group;
    this.index = 0;
  }

  next() {
    if (this.index === this.group.members.length) {
      return { done: true };
    }

    return {
      value: this.group.members[this.index++],
      done: false
    }
  }
}

function groupIteratorTest() {
  let group = Group.from([5, 6, 6, 7, 7, 8, 8, 9]);
  for (let item of group) {
    console.log(item);
  }
}

groupIteratorTest();

/* Persistent Group */

class PGroup {
  constructor() {
    this.members = [];
  }

  add(value) {
    let group = this._copy();
    if (!group.has(value)) {
      group.members.push(value);
    }
    return group;
  }

  delete(value) {
    let group = this._copy();
    let index = group.members.indexOf(value);
    if (index !== -1) {
      group.members.splice(index, 1);
    }
    return group;
  }

  has(value) {
    return this.members.indexOf(value) !== -1;
  }

  _copy() {
    let group = new PGroup();
    group.members = this.members.slice();
    return group;
  }
}

PGroup.empty = new PGroup();

function PGroupTest() {
  let group = PGroup.empty;
  group = group.add(1);
  group = group.add(2);
  group = group.add(2);
  group = group.add(3);
  console.log(group);

  group = group.delete(3);
  console.log(group);

  console.log(group.has(1));
}

PGroupTest();

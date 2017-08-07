this.created = new Date().getTime();
this.modified = new Date().getTime();

if(!isRoot) {
  protect('group');
} else {
  this.group = this.group.id;
}

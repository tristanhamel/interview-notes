this.modified = new Date().getTime();
protect('created');
protect('owner');

if(!isRoot) {
  protect('group');
}

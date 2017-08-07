this.type = 'question';

if(!internal) {
  console.log(internal);
  dpd.groups.get({id: this.group}, group => {
    this.group = group;
  });
}
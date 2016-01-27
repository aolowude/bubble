Template.register.events({
  'submit': function(evt, tpl) {
    if(evt.preventDefault) evt.preventDefault();

    var val = tpl.$('#nickname').val();

    if(val)
      Streamy.emit('nick_set', { 'handle': val });
  }
});
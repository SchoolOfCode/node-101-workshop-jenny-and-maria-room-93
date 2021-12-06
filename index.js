

function describeItem(item) {
if (item.count === 1) {
  console.log("I have a " + item.name + ". Here's what I like about it: " + item.whatILike);
} else {
  console.log("I have " + item.count + item.name + "s. Here's what I like about them: " + item.whatILike);
}
//if function, if one item console log "i have a item.name. Here's what I item.whatILike"
//else console log "I have item.count item.names. Here's what I like about them: item.whatIlike"
  //console.log (item.count)
}

// describeItem (myCollection[0]); (task 2c)



function describeCollection(array) {
  for (i=0; i<array.length; i++) {
  describeItem(myCollection[i]);
  }
}

describeCollection(myCollection);



















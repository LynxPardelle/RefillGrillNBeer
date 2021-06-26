'use strict'
console.log('events work');

function onEventInsRmvAnimation(trigger) {
  // console.log('animating something...');
  let animate_this_elements = document.getElementsByClassName('animate__onEvent');
  for (let element of animate_this_elements) {
    console.log(element);
    let animation_name = element.getAttribute('animation_name');
    console.log(animation_name);
    let animation_trigger = element.getAttribute('animation_trigger');
    console.log(animation_trigger);
    console.log(trigger);
    if (trigger === animation_trigger) {
      if (element.classList.contains('animate__' + animation_name)) {
        element.classList.remove('animate__' + animation_name);
        console.log(element);
      } else {
        element.classList.add('animate__' + animation_name);
        console.log(element);
      }
    }
  }
}
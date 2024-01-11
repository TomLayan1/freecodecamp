let glideMixin = function (obj){
  obj.glide = function (){
    console.log('Gliding');
  }
}

let bird = {
  name: "Donald",
  numLegs: 2
};

let boat = {
  name: "Warrior",
  type: "race-boat"
};

glideMixin(bird);
glideMixin(boat);

bird.glide();
boat.glide();
/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('roles.meat');
 * mod.thing == 'a thing'; // true
 */

// TODO.: Create creep that targets enemy creeps in spawn and chase them

var rolesMeat = {
    /** @param {Creep} creep **/
    run: function(creep){
        const target = creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
        if(target) {
            if(creep.attack(target) == ERR_NOT_IN_RANGE) {
                creep.moveTo(target);
            } else {
                creep.attack(target);
            }
        }
    }
};


module.exports = rolesMeat;
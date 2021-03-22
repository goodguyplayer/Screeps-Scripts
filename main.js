var rolesDrones = require('roles.drones');
var rolesBuilders = require('roles.builders');
var rolesUpgraders = require('roles.upgraders');
var rolesMeat = require('roles.meat');
var creepsCreator = require('creeps.creator');

module.exports.loop = function () {
    //console.log('Amount of CPU that you can spend on a current tick:', Game.cpu.tickLimit);

    // Create creep.
    creepsCreator.run();


    for(var name in Memory.creeps) {
        if(!Game.creeps[name]) {
            delete Memory.creeps[name];
            console.log('Clearing non-existing creep memory:', name);
        }
    }
    
    
    if(Game.spawns['Spawn1'].spawning) { 
        var spawningCreep = Game.creeps[Game.spawns['Spawn1'].spawning.name];
        Game.spawns['Spawn1'].room.visual.text(
            '🛠️' + spawningCreep.memory.role,
            Game.spawns['Spawn1'].pos.x + 1, 
            Game.spawns['Spawn1'].pos.y, 
            {align: 'left', opacity: 0.8});
    }

    // Run creeps
    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'drones') {
            rolesDrones.run(creep);
        }
        if(creep.memory.role == 'upgraders') {
            rolesUpgraders.run(creep);
        }
        if(creep.memory.role == 'builders') {
            creepsDrones.run(creep);
        }
        if(creep.memory.role == 'meat'){
            rolesMeat.run(creep);
        }
    }
    
    console.log('Amount of CPU that you can spend on a current tick:', Game.cpu.tickLimit);   
    console.log('Amount of CPU that was used:', Game.cpu.getUsed());
}
var rolesDrones = require('roles.drones');
var rolesBuilders = require('roles.builders');
var rolesUpgraders = require('roles.upgraders');
var rolesMeat = require('roles.meat');

// Used to create new creeps, based on a pre ordained list.
var creepsCreator = {
	run: function(){
	    
	    // Make all roles as vars
        var drones = _.filter(Game.creeps, (creep) => creep.memory.role == 'drones');
        var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builders');
        var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgraders');
        var meat =  _.filter(Game.creeps, (creep) => creep.memory.role == 'meat');
        
        // List of creeps. types: var, role: what it does, quantity: how many we want in total, skills: what it does
        var creepstocheck = [
            {types:meat, role: 'meat', quantity:2, skills:[ATTACK,TOUGH,TOUGH,MOVE]},
            {types:builders, role: 'builders', quantity:1, skills:[WORK,WORK,CARRY,MOVE]},
            {types:upgraders, role: 'upgraders', quantity:2, skills:[WORK,WORK,CARRY,MOVE]},
            {types:drones, role: 'drones', quantity:4, skills:[WORK,WORK,CARRY,MOVE]},
          
          ];
          
        // Create creeps  
        // Todo.: If unable to spawn, don't say it can spawn.
        for (var i in creepstocheck){
            if(creepstocheck[i].types.length < creepstocheck[i].quantity){
                var newName = creepstocheck[i].role + ' ' + Game.time;
                console.log('Spawning new ' + creepstocheck[i].role + ' .: ' + newName);
                Game.spawns['Spawn1'].spawnCreep(creepstocheck[i].skills, newName, {memory: {role: creepstocheck[i].role}});
            }
        }
    }
};

module.exports = creepsCreator;
// Drones. They prioritize buildings, then the spawn.

var creepsDrones = {
	run: function(creep){

    	// Set "building" to false if RESOURCE_ENERGY == 0.
    	if(creep.memory.building && creep.store[RESOURCE_ENERGY] == 0){
    		creep.memory.building = false;
    	}
    	
    	// Set "building" to true if getFreeCacity() == 0.
    	if(!creep.memory.building && creep.store.getFreeCapacity() == 0) {
    	        creep.memory.building = true;
    	}

    	// If "building" == true, return to building or spawn.
    	if(creep.memory.building){
    		var targets = creep.room.find(FIND_MY_CONSTRUCTION_SITES);
    		var spawner = creep.room.find(FIND_STRUCTURES, {
                        filter: (structure) => {
                            return (structure.structureType == STRUCTURE_EXTENSION || structure.structureType == STRUCTURE_SPAWN) && structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0;
                        }
		
    		// Prioritize buildings.
    		if(targets.length){
    		
    			// Display path to building
    			if(creep.build(targets[0] == ERR_NOT_IN_RANGE){
    			    creep.say('🚧');
                    creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffffff'}});
    			}
    
    		}
		
    		// Move to spawn (?)
    		else {
    			if(creep.transfer(spawner[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
    			    creep.say('🟡');
                    creep.moveTo(spawner[0], {visualizePathStyle: {stroke: '#ffffff'}});
                }
    
    		}
	
    	} 
    	// Else, harvest.
    	else {
    	        var sources = creep.room.find(FIND_SOURCES);
                if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                    creep.say('🔄');
                    creep.moveTo(sources[0], {visualizePathStyle: {stroke: '#ffaa00'}});
                }
    	    
    	}
}
}
};

module.exports = creepsDrones;

exports.up = function(knex, Promise) {
	return knex
  	.schema
  	.createTable('puesto', function(t) {
  		t.increments(); // 
  		t.string('titulo');
  		t.integer('id_puesto');
  		t.timestamp('fecha_registro')
  	     .notNullable()
  	     .defaultTo(knex.fn.now());
  	});
  
};

exports.down = function(knex, Promise) {
	return knex
  	.schema
  	.dropTableIfExists('puesto');
  
};

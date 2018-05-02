exports.up = function(knex, Promise) {
	return knex
  	.schema
  	.createTable('sucursal', function(t) {
  		t.increments(); // 
  		t.string('titulo');
  		t.timestamp('fecha_registro')
  	     .notNullable()
  	     .defaultTo(knex.fn.now());
  	});
  
};

exports.down = function(knex, Promise) {
	return knex
  	.schema
  	.dropTableIfExists('sucursal');
  
};
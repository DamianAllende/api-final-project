
exports.up = function(knex, Promise) {
  return knex
  	.schema
  	.createTable('username', function(t) {
  		t.increments()
      .primary();// 
  		t.string('email');
  		t.string('pass');
  		t.string('nombre');
  		t.integer('puesto');
      // .notNullable()
      // .references('id_puesto')
      // .inTable('puesto')
      // .onDelete('CASCADE')
      // .index();
  		t.integer('sucursal');
      // .notNullable()
      // .references('id_sucursal')
      // .inTable('sucursal')
      // .onDelete('CASCADE')
      // .index();
  		t.timestamp('fecha_registro')
  	     .notNullable()
  	     .defaultTo(knex.fn.now());
  	});
};

exports.down = function(knex, Promise) {
  return knex
  	.schema
  	.dropTableIfExists('username');
};
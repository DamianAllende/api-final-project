const { Model } =  require('objection')

class Sucursal extends Model{
	static get tableName() {
		return 'sucursal'
	}
}

module.exports = Sucursal




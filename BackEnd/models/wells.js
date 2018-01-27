var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var WellSchema   = new Schema();

module.exports = mongoose.model('Well', WellSchema);

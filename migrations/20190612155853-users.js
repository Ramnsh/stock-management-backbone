'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db, callback) {
  // return null;
  db.createTable('users', {
    id: {
      type: 'int',
      primaryKey: true,
      autoIncrement: true
    },
    user_name: {
      type: 'string',
      length: 40
    },
    email: {
      type: 'string',
      length: 255
    },
    password: {
      type: 'string',
      length: 255
    },
    first_name: {
      type: 'string',
      length: 40
    },
    last_name: {
      type: 'string',
      length: 40
    },
    role_id: {
      type: 'int'
    },
    is_deleted: {
      type: 'boolean'
    },
    created_on: {
      type: 'datetime'
    },
    updated_on: {
      type: 'datetime'
    },
  }, function(err) {
    if (err) return callback(err);
    return callback();
  });
};

exports.down = function(db, callback) {
  db.dropTable('users', callback);
};

exports._meta = {
  "version": 1
};

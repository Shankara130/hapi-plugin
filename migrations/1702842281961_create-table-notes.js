/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
    pgm.createTable('notes', {
        id: {
            type: 'VARCHAR(50)',
            primarykey: true,
        },
        title: {
            type: 'TEXT',
            notNULL: true,
        },
        body: {
            type: 'TEXT',
            notNULL: true,
        },
        tags: {
            type: 'TEXT[]',
            notNull: true,
        },
        created_at: {
            type: 'TEXT',
            notNull: true,
        },
        updated_at: {
            type: 'TEXT',
            notNull: true,
        },
    });
};

exports.down = (pgm) => {
    pgm.dropTable('notes');
};

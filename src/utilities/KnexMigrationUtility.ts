import * as Knex from 'knex';
import { TableBuilder } from 'knex';
import voca = require('voca');

export async function createTable(knex: Knex, tableName, callback: Function) {
	if (await knex.schema.hasTable(tableName)) return 0;
	return knex.schema.createTable(tableName, function(t) {
		t.increments('id')
			.unsigned()
			.primary();
		t.dateTime('createdAt').notNullable();
		t.dateTime('updatedAt').nullable();

		callback(t);
	});
}

export function dropTable(knex: Knex, tableName) {
	return knex.schema.dropTable(tableName);
}

export function createTableForEmailModel(knex: Knex, tableName, callback: Function) {
	return this.createTable(knex, tableName, function(t) {
		t.string('from').notNullable();
		t.string('to').notNullable();
		t.string('subject').notNullable();
		t.string('html').notNullable();

		callback(t);
	});
}

export function integerNullableAndDefaultToZero(t: TableBuilder, column: Array<string>) {
	for (let i = 0; i < column.length; i++) {
		t.string(voca.camelCase(column[i]))
			.nullable()
			.defaultTo(0);
	}
}

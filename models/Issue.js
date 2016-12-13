const keystone = require('keystone');
const Types = keystone.Field.Types;

/**
 * User Model
 * ==========
 */

const Issue = new keystone.List('Issue');

Issue.add({
	name: { type: Types.Text, required: true, index: true },
  summary: { type: Types.Html, wysiwyg: true, initial: false, required: false },
  facts: { label: 'Key Facts (bullets)', type: Types.Html, wysiwyg: true, initial: false, required: false },
  reading: { label: 'Additional Reading (links)', type: Types.Html, wysiwyg: true, initial: false, required: false },
  image: { type: Types.CloudinaryImage, autoCleanup : true, initial: false, required: false }
});

// Provide access to Keystone
// Issue.schema.virtual('canAccessKeystone').get(function() {
// 	return this.isAdmin;
// });


/**
 * Relationships
 */

Issue.relationship({ ref: 'Task', path: 'tasks', refPath: 'issue' });


/**
 * Registration
 */

Issue.defaultColumns = 'name, image';
Issue.register();

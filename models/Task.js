const keystone = require('keystone');
const Types = keystone.Field.Types;

/**
 * User Model
 * ==========
 */

const Task = new keystone.List('Task');

Task.add({
	name: { type: Types.Text, required: true, index: true },
  issue: { type: Types.Relationship, ref: 'Issue', initial: true, required: true },
  tags: { type: Types.TextArray, required: false },
  location: {
    label: 'leave blank to use user\'s location',
    type: Types.Location,
    defaults: { country: 'us' },
    improve: true,
    enableMapsAPI: true,
  },
  duration: {
    type: Types.Select,
    required: true,
    default: 30,
    numeric: true,
    options: [
      { value: 30, label: '30 minutes' },
      { value: 60, label: 'One hour' },
      { value: 180, label: 'Half day' },
      { value: 360, label: 'Full day' }
    ]
  },
  startDate: { label: 'Start Date', type: Types.Date, default: Date.now },
  endDate: { label: 'End Date', type: Types.Date },
  template: {
    type: Types.Select,
    required: true,
    default: 'CallCongress',
    options: [
      { value: 'CallCongress', label: 'Call your congressmen and congresswomen' },
      { value: 'CallSenate', label: 'Call your senators' },
      { value: 'CallHouse', label: 'Call your representatives' }
    ]
  },
  templateProps: {
    requestedAction: { label: 'Requested Action', type: String, dependsOn: { template: ['CallSenate', 'CallHouse', 'CallCongress'] } },
    petitionScript: { label: 'Petition Script', type: Types.Html, wysiwyg: true, dependsOn: { template: ['CallSenate', 'CallHouse', 'CallCongress'] } },
    thankYouScript: { label: 'Thank You Script', type: Types.Html, wysiwyg: true, dependsOn: { template: ['CallSenate', 'CallHouse', 'CallCongress'] } }
  }
});


// Provide access to Keystone
// Task.schema.virtual('canAccessKeystone').get(function() {
// 	return this.isAdmin;
// });


/**
 * Relationships
 */

// Task.relationship({ ref: 'Post', path: 'posts', refPath: 'author' });


/**
 * Registration
 */

Task.defaultColumns = 'name, issue, template';
Task.register();

const keystone = require('keystone');
const Types = keystone.Field.Types;

const EmailSubscriber = new keystone.List('EmailSubscriber');

EmailSubscriber.add({
	email: { type: Types.Email, required: true, initial: true, index: true, unique: true },
  issues: { type: Types.Relationship, ref: 'Issue', many: true },
  isVerified: { type: Boolean, label: 'Email Verified', default: false }
});

EmailSubscriber.defaultColumns = 'email, issues, isVerified';
EmailSubscriber.register();

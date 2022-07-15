const mongoose = require('mongoose');
const { model, Schema } = mongoose;
const bcryct = require('bcryptjs')

let userSchema = Schema(
	{
		email: {
			type: String,
			require: [true, 'Email harus diisi'],
		},
		name: {
			type: String,
			require: [true, 'Nama harus diisi'],
		},
		password: {
			type: String,
			require: [true, 'Password harus diisi'],
		},
		role: {
			type: String,
			enum: ['admin', 'organizer', 'owner'],
			default: 'admin',
		},
		organizer: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Organizer',
			required: true,
		},
	},
	{ timestamps: true }
);

userSchema.pre('save', function (next) {
	this.password = bcryct.hashSync(this.password, HASH_ROUND)
	next()
})

userSchema.methods.comparePassword = async function (canditatePassword) {
	const isMatch = await bcrypt.compare(canditatePassword, this.password);
	return isMatch;
};


module.exports = model('User', userSchema);

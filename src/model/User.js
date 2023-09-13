import mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: [true, 'Username already Exist'],
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    profile_pic: {
      type: String
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    user_category: {
      favorites: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Movie',
        },
      ],
      watched: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Movie',
        },
      ],
      watchlist: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Movie',
        },
      ],
    },
  },
  { timestamps: true }
);

const User = mongoose.models.User || mongoose.model('User', UserSchema);
export default User;

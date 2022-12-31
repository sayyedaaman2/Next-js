const mongoose = require("mongoose");
/**
 *      {
  id: '100054226723496353989',
  displayName: 'Sayyed Aaman',
  name: { familyName: 'Aaman', givenName: 'Sayyed' },
  photos: [
    {
      value: 'https://lh3.googleusercontent.com/a/AEdFTp6_5dWpI7irI9r2IGFZzrAmew5C2oreH9mbO4dUdA=s96-c'
    }
  ],
  provider: 'google',
  _raw: '{\n' +
    '  "sub": "100054226723496353989",\n' +
    '  "name": "Sayyed Aaman",\n' +
    '  "given_name": "Sayyed",\n' +
    '  "family_name": "Aaman",\n' +
    '  "picture": "https://lh3.googleusercontent.com/a/AEdFTp6_5dWpI7irI9r2IGFZzrAmew5C2oreH9mbO4dUdA\\u003ds96-c",\n
    '  "picture": "https://lh3.googleusercontent.com/a/AEdFTp6_5dWpI7irI9r2IGFZzrAmew5C2oreH9mbO4dUdA\\u003ds96-c",\n
' +
    '  "locale": "en-GB"\n' +
    '}',
  _json: {
    sub: '100054226723496353989',
    name: 'Sayyed Aaman',
    given_name: 'Sayyed',
    family_name: 'Aaman',    picture: 'https://lh3.googleusercontent.com/a/AEdFTp6_5dWpI7irI9r2IGFZzrAmew5C2oreH9mbO4dUdA=s96-c',
    locale: 'en-GB'
  }
}
 */
const userSchema = new mongoose.Schema(
  {
    googleId: {
      type: String,
      required: true,
    },
    displayName: {
      type: String,
    },
    family_name: {
      type: String,
    },
    given_name: {
      type: String,
    },
    profile: {
      type: String,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);

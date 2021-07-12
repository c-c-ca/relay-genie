const axios = require('axios');
const {
  sightEngine: { URI, ...keys },
} = require('../config/keys');

const mode = 'username';
const lang = 'en';

module.exports.containsProfanity = async text => {
  const {
    data: {
      profanity: { matches: matches },
    },
  } = await axios.post(URI, null, {
    params: { ...keys, mode, lang, text },
  });
  return matches.length > 0;
};

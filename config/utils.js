module.exports.toMongoURI = ({ username, password, cluster, database }) =>
  `mongodb+srv://${username}:${password}@cluster0.${cluster}.mongodb.net/${database}?retryWrites=true&w=majority`;

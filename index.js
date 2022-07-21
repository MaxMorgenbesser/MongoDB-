// import mongo tools / library
const { MongoClient, ServerApiVersion } = require("mongodb");
// connect to Mongo/Atlas USING a URL connection string
const {uri} = require('./dbSecrets.js')
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

// connect to sample_mflix database
const db = client.db("sample_mflix");
// Query

// Let's get a specific movie (doc) from the "movies collection"
// search by title for Back to the Future
db.collection("movies").
findOne({ title: "Back to the Future" }, (err, results)=>{
if (err){
    console.error(err)
}else{
    console.log(results)
    client.close()
}
}
)



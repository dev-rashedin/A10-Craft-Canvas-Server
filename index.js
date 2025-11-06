const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const { StatusCodes } = require('http-status-toolkit');
const { notFoundHandler, globalErrorHandler, asyncHandler } = require('express-error-toolkit');
const app = express();

const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

const uri =
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.4qgkjzt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`; 
   

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    client.connect();

    const userCollection = client.db('craftCanvasDB').collection('users')
    const itemCollection = client.db('craftCanvasDB').collection('items')
    const categoryCollection = client.db('craftCanvasDB').collection('subcategory')

    // user related api
    app.get(
      '/users',
      asyncHandler(async (req, res) => {
        const cursor = userCollection.find();
        const result = await cursor.toArray();
        res.status(StatusCodes.OK).send(result);
      })
    );

    app.get(
      '/users/:id',
      asyncHandler(async (req, res) => {
        const id = req.params.id;
        const query = { _id: new ObjectId(id) };
        const result = await userCollection.findOne(query);

        res.status(StatusCodes.OK).send(result);
      })
    );

    app.post(
      '/users',
      asyncHandler(async (req, res) => {
        const user = req.body;
        const result = await userCollection.insertOne(user);
        res.status(StatusCodes.OK).send(result);
      })
    );

    // add items related api
    app.get(
      '/items',
      asyncHandler(async (req, res) => {
        const cursor = itemCollection.find();
        const result = await cursor.toArray();
        res.status(StatusCodes.OK).send(result);
      })
    );
    
    app.get(
      '/items/:id',
      asyncHandler(async (req, res) => {
        const id = req.params.id;
        const query = { _id: new ObjectId(id) };
        const result = await itemCollection.findOne(query);

        res.status(StatusCodes.OK).send(result);
      })
    );

    app.post(
      '/items',
      asyncHandler(async (req, res) => {
        const user = req.body;
        const result = await itemCollection.insertOne(user);
        res.status(StatusCodes.CREATED).send(result);
      })
    );

    app.patch(
      '/items/:id',
      asyncHandler(async (req, res) => {
        const id = req.params.id;
        console.log(id);

        const updatedUserInfo = req.body;
        const query = { _id: new ObjectId(id) };

        const updatedUser = {
          $set: {
            ...updatedUserInfo,
          },
        };

        const result = await itemCollection.updateOne(query, updatedUser);

        res.status(StatusCodes.OK).send(result);
      })
    );

    app.delete(
      '/items/:id',
      asyncHandler(async (req, res) => {
        const id = req.params.id;
        const query = { _id: new ObjectId(id) };
        const result = await itemCollection.deleteOne(query);

        res.status(StatusCodes.OK).send(result);
      })
    );

    // subcategory api
    app.get(
      '/category',
      asyncHandler(async (req, res) => {
        const cursor = categoryCollection.find();
        const result = await cursor.toArray();

        res.send(result);
      })
    );

    // Send a ping to confirm a successful connection
    await client.db('admin').command({ ping: 1 });
    console.log(
      'Pinged your deployment. You successfully connected to MongoDB!'
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


// basic route
app.get('/', (req, res) => {
  res.status(StatusCodes.OK).send('server is running smoothly');
});


// not found handler and global error handler
app.use(notFoundHandler)
app.use(globalErrorHandler)


// start the server
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});

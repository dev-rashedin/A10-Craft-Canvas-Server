async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    client.connect();

    const userCollection = client.db('craftCanvasDB').collection('users')
    const itemCollection = client.db('craftCanvasDB').collection('items')
    const categoryCollection = client.db('craftCanvasDB').collection('subcategory')

    // user related api
    app.get('/users', async (req, res) => {
      const cursor = userCollection.find();
      const result = await cursor.toArray();
      res.send(result)
    })

    app.get('/users/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) }
      const result = await userCollection.findOne(query);

      res.send(result)
    })

    app.post('/users', async (req, res) => {
      const user = req.body;
      const result = await userCollection.insertOne(user)
      res.send(result)
    })

    // add items related api
  app.get('/items', async (req, res) => {
    const cursor = itemCollection.find();
    const result = await cursor.toArray();
    res.send(result);
  });
    
    app.get('/items/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await itemCollection.findOne(query);

      res.send(result);
    });

    app.post('/items', async (req, res) => {
       const user = req.body;
       const result = await itemCollection.insertOne(user);
       res.send(result);
    })

     app.patch('/items/:id', async (req, res) => {
       const id = req.params.id;
       console.log(id)
       
       const updatedUserInfo = req.body
       const query = { _id: new ObjectId(id) };

        const updatedUser = {
          $set: {
            ...updatedUserInfo,
          },
        };

       const result = await itemCollection.updateOne(query, updatedUser);

       res.send(result);
     });

    app.delete('/items/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await itemCollection.deleteOne(query);

      res.send(result)
    })

    // subcategory api
    app.get('/category', async (req, res) => {
      const cursor = categoryCollection.find();
      const result = await cursor.toArray();

      res.send(result)
    })

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


app.get('/', (req, res) => {
  res.send('server is running smoothly');
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});

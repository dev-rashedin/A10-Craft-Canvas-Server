async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    client.connect();

    const userCollection = client.db('craftCanvasDB').collection('users')
    const itemCollection = client.db('craftCanvasDB').collection('items')
    const categoryCollection = client.db('craftCanvasDB').collection('subcategory')

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

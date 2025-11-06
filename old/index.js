async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    client.connect();


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
  }
}
run().catch(console.dir);



app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});

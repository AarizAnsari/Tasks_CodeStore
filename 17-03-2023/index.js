
const { MongoClient } = require('mongodb');
const url = "mongodb+srv://aariz:admin@cluster0.bh4cixo.mongodb.net/test";
const client = new MongoClient(url);
const database = "schoolDB";

async function getData() {
   let result = await client.connect();
   let db = result.db(database);
   let col = await db.collection("students");
   const data = await col.find().toArray();
   await client.close();
   return data;
}

async function writeData(rollno, studentName, studentMarks) {
   await client.connect();
   let data = await client.db(database).collection('students');
   let status = "pass";
   if (studentMarks < 400) { status = "fail"; }
   await data.insertOne({ _id: rollno, name: studentName, marks: studentMarks, status: status });
   client.close();
}

async function updateData(rollno,key,updatedata) {
   await client.connect();
   let data = await client.db(database).collection('students');
   await data.updateOne({ _id: rollno }, { $set: { [key]: updateData } });
   client.close();
}

async function deleteData(rollno) {
   await client.connect();
   let data = await client.db(database).collection('students');
   await data.deleteOne({ _id: rollno});
   client.close();
}

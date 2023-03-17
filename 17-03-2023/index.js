
const { MongoClient } = require('mongodb');
const url = "mongodb://127.0.0.1:27017/";
const client = new MongoClient(url);
const database = "schoolDB";

async function getData() {
   let result = await client.connect();
   let db = result.db(database);
   let col = db.collection("students");
   const data = col.find().toArray();
   return data
   client.close();
}

async function writeData(rollno, studentName, studentMarks) {
   await client.connect();
   let data = await client.db(database).collection('students');
   let status = "pass";
   if (marks < 400) { status = "fail"; }
   await data.insertMany({ _id: rollno, name: studentName, marks: studentMarks, status: status });
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

getData();
const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");

const router = express.Router();

const uri = process.env.MONGODB_URI || "mongodb://localhost:27017";
const client = new MongoClient(uri);
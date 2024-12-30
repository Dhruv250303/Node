const express = require('express');

const app = express()

const category = [
    {id:1,name:'Web'},
    {id:1,name:'Mobile'},
    {id:1,name:'Photography'},
]

app.get(category)
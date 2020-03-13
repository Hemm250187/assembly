var init = require('./createData.js');
var Mock = require('mockjs');
let Random = Mock.Random;
init(
    './courses.json',
    {
        'id|+1': new Date().getTime(),
        "name":"@cname",
        'title':"@ctitle",
        "children|0-3": [{
              "id|+1":Math.random(),
              'name':'@cname',
              'title':"@ctitle",
              "children|0-1": [{
                "id|+1":Math.random(),
                'name':'@cname',
                'title':"@ctitle",
            }]
          }]
    },
    10);


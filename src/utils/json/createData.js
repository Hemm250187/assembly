var fs = require('fs');
var Mock = require('mockjs');


function myMock(set, num) {
    let o = {};
    let key = 'value|' + num;
    o[key] = [set];
    let data = Mock.mock(o);
    return data;
}

function writeData(url, set, num) {
    let d = myMock(set, num);
    fs.writeFile(url, JSON.stringify(d.value,null,"\t"), function(err) {
        if (err) {
            return err;
        }
    })
}

function createData(url, set, num) {

    fs.readFile(url, 'utf8', function(err, data) {
        if (err) {
            //文件不存在则自动生成文件
            writeData(url, set, num)
        } else {
            // 文件存在，且内容为空数组
            if (JSON.parse(data.toString()).length <= 0) {
                writeData(url, set, num)
            } else {
                 console.log('文件数组为非空，不支持覆盖已有文件内容')
            }
        }
    })
}


module.exports = createData;

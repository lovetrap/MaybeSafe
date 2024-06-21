var finger = ""
var version = ""
// 上面俩个参数为暴露变量, 方便后端读取

var proto = "tcp"

if (proto !== type) {
    throw SyntaxError();
}

var index = findBytesIndex(datasource.banner, [0, 0, 0, 10]) + 4


var version_temp = []

for (;index<datasource.banner.length; index++) {
    var t = datasource.banner[index]
    if (datasource.banner[index] === 0 ){
        version = string(version_temp);
        finger = "mysql"
        break
    }
    version_temp.push(t)

}
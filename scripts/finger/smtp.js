var finger = ""
var version = ""


var proto = "tcp"
if (proto !== type) {
   throw SyntaxError();
}

var lines = readlines(datasource.banner, [13,10])

var c = true

lines.some(e => {
    const data = string(e)
    const index = data.toLowerCase().indexOf("smtp")
    // 1. 220 xxxx.xxxx EXMTP xxxx.xxxx
    if (index !== -1) {
        finger = "SMTP"
        const arr = data.substring(index+6).split(" ")
        if (arr.length > 1) {
            if (arr[1].toLowerCase() === "service") {
                version = arr[0]
            }else {
                version = arr[0] + arr[1]
            }
                
            return true
        }else if (arr.length === 1) {
            version = arr[0]
            return true
        }
    }else {
        // 2. 无EXMTP关键字
        // 判断是否为数字 + 空格 + 字符
        const regex = /^\d+[- ]+[a-zA-Z0-9\-]+/
        c &= regex.test(data)
    }
})

if (c) {
    finger = "SMTP"
}
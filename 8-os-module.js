const os=require("os")

// Info about the current user

const user =os.userInfo()

console.log(user)

// Method returns the System uptime in seconds

console.log(`The System Uptime is ${os.uptime()} seconds`)

const currentOs={
    name:os.type(),
    release:os.release(),
    total:os.totalmem(),
    free:os.freemem(),
}

console.log(currentOs)

radio.onReceivedString(function (receivedString) {
    if (receivedString == 1) {
        wuKong.mecanumSpeed(wuKong.WheelList.LeftFront_def, 100)
    } else if (receivedString == 2) {
        wuKong.mecanumSpeed(wuKong.WheelList.RightFront_def, 100)
    } else if (receivedString == 3) {
        wuKong.mecanumSpeed(wuKong.WheelList.LeftFront_def, 100)
        wuKong.mecanumSpeed(wuKong.WheelList.RightFront_def, 100)
    } else if (receivedString == 0) {
        wuKong.mecanumStop()
    }
})
radio.setGroup(55)
wuKong.mecanumWheel(
wuKong.ServoList.S1,
wuKong.ServoList.S2,
wuKong.ServoList.S3,
wuKong.ServoList.S4
)
basic.forever(function () {
	
})

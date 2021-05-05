radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        wuKong.mecanumSpeed(wuKong.WheelList.RightFront_def, 100)
    } else if (receivedNumber == 2) {
        wuKong.mecanumSpeed(wuKong.WheelList.LeftFront_def, 100)
    } else if (receivedNumber == 3) {
        wuKong.mecanumSpeed(wuKong.WheelList.LeftFront_def, 100)
        wuKong.mecanumSpeed(wuKong.WheelList.RightFront_def, 100)
    } else if (receivedNumber == 0) {
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

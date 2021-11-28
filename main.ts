radio.onReceivedNumber(function (receivedNumber) {
    if (recent_max_device == radio.receivedPacket(RadioPacketProperty.SerialNumber)) {
        recent_max = radio.receivedPacket(RadioPacketProperty.SignalStrength)
    } else if (radio.receivedPacket(RadioPacketProperty.SignalStrength) > recent_max) {
        recent_max_device = radio.receivedPacket(RadioPacketProperty.SerialNumber)
        recent_max = radio.receivedPacket(RadioPacketProperty.SignalStrength)
    }
    led.plotBarGraph(
    Math.map(recent_max, -100, -42, 0, 9),
    9
    )
})
input.onButtonPressed(Button.AB, function () {
    radio.setGroup(randint(0, 10))
    recent_max = -120
    basic.showIcon(IconNames.Yes)
})
let recent_max_device = 0
let recent_max = 0
radio.setGroup(randint(0, 10))
recent_max = -120
recent_max_device = 0
basic.forever(function () {
    radio.sendNumber(0)
    basic.pause(500)
})

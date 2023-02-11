let radiogruppe = 0
radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber)
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
basic.forever(function () {
    radiogruppe = 100
    radio.setGroup(radiogruppe)
    radiogruppe += 1
    basic.pause(100)
})

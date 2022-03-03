RunComp.SetLightLevel()
radio.setGroup(33)
let cil = false
basic.forever(function on_forever() {
    console.logValue("dist", RunComp.ping(DigitalPin.P12, DigitalPin.P13, 500))
    basic.pause(500)
})
function on_light_drop() {
    
    if (cil == true) {
        music.playTone(Note.C, music.beat())
    }
    
}

radio.onReceivedNumber(function on_received_number(receivedNumber: number) {
    
})

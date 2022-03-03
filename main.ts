RunComp.SetLightLevel()
radio.setGroup(33)
let cas = 0
radio.onReceivedNumber(function on_received_number(receivedNumber: number) {
    
    cas = control.millis()
})
RunComp.OnLightDrop(function on_light_drop() {
    
    cas = control.millis()
    basic.showNumber(cas)
    control.reset()
})

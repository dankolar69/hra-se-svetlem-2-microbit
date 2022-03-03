RunComp.set_light_level()
radio.set_group(33)
cas = 0

def on_received_number(receivedNumber):
    global cas
    cas = control.millis()
radio.on_received_number(on_received_number)

def on_light_drop():
    global cas
    cas = control.millis()
    basic.show_number(cas)
    control.reset()
RunComp.on_light_drop(on_light_drop)

    
        


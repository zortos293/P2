function stage_4 () {
    TEMP = _1TIMECODE
    serial.writeLine("" + (TEMP))
    if (TEMP == Stage4Com) {
        radio.sendNumber(24)
        basic.showIcon(IconNames.Yes)
        basic.pause(500)
        basic.clearScreen()
        stage3clear += 1
    } else {
        if (TEMP.length == Stage3Com.length && TEMP != Stage3Com) {
            basic.showIcon(IconNames.No)
            basic.pause(500)
            basic.clearScreen()
            TEMP = ""
            _1TIMECODE = ""
        }
    }
}
input.onButtonPressed(Button.A, function () {
    basic.showString("A")
    _1TIMECODE = "" + TEMP + "A"
    if (Stage1clear == 0) {
        stage_1()
    }
    if (Stage1clear == 1) {
        stage_2()
    }
    if (stage2clear == 1) {
        stage_3()
    }
    if (stage3clear == 1) {
        stage_4()
    }
})
function stage_3 () {
    TEMP = _1TIMECODE
    serial.writeLine("" + (TEMP))
    if (TEMP == Stage3Com) {
        radio.sendNumber(23)
        basic.showIcon(IconNames.Yes)
        basic.pause(500)
        basic.clearScreen()
        stage2clear += 1
    } else {
        if (TEMP.length == Stage3Com.length && TEMP != Stage3Com) {
            basic.showIcon(IconNames.No)
            basic.pause(500)
            basic.clearScreen()
            TEMP = ""
            _1TIMECODE = ""
        }
    }
}
function stage_2 () {
    TEMP = _1TIMECODE
    serial.writeLine("" + (TEMP))
    if (TEMP == Stage2Com) {
        radio.sendNumber(22)
        basic.showIcon(IconNames.Yes)
        basic.pause(500)
        basic.clearScreen()
        TEMP = ""
        _1TIMECODE = ""
        stage2clear += 1
    } else {
        if (TEMP.length == Stage2Com.length && TEMP != Stage2Com) {
            basic.showIcon(IconNames.No)
            basic.pause(500)
            basic.clearScreen()
            TEMP = ""
            _1TIMECODE = ""
        }
    }
}
input.onButtonPressed(Button.B, function () {
    basic.showString("B")
    _1TIMECODE = "" + TEMP + "B"
    if (Stage1clear == 0) {
        stage_1()
    }
    if (Stage1clear == 1) {
        stage_2()
    }
    if (stage2clear == 1) {
        stage_3()
    }
    if (stage3clear == 1) {
        stage_4()
    }
})
function stage_1 () {
    TEMP = _1TIMECODE
    serial.writeLine("" + (TEMP))
    if (TEMP == Stage1Com) {
        radio.sendNumber(21)
        basic.showIcon(IconNames.Yes)
        basic.pause(200)
        basic.clearScreen()
        TEMP = ""
        _1TIMECODE = ""
        Stage1clear += 1
    } else {
        if (TEMP.length == Stage1Com.length && TEMP != Stage1Com) {
            basic.showIcon(IconNames.No)
            basic.pause(500)
            basic.clearScreen()
            TEMP = ""
            _1TIMECODE = ""
        }
    }
}
let stage2clear = 0
let Stage1clear = 0
let stage3clear = 0
let _1TIMECODE = ""
let Stage4Com = ""
let Stage3Com = ""
let Stage2Com = ""
let Stage1Com = ""
let TEMP = ""
basic.showString("?")
radio.setGroup(25)
TEMP = ""
Stage1Com = "ABA"
Stage2Com = "BAB"
Stage3Com = "ABA"
Stage4Com = "AAB"
let Stage5Com = "AAB"
let Stage6Com = "ABB"
let Stage7Com = "BAB"
let Stage8Com = "BAB"
radio.sendNumber(51)

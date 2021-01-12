while (true) {
    if (input.soundLevel() > 30) {
        light.showAnimation(light.rainbowAnimation, 500)
    } else {
        light.clear()
    }
    
}

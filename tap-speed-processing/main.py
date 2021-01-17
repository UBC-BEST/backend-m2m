from implementation import *

finger = ["thumb", "index", "middle", "ring", "pinky"]

def main(file, tapSpeeds):
    # open fsr data
    # first column = time, column 2-6 = fingers starting from thumb
    with open(file, newline='') as csvfile:
        data = (((list(csv.reader(csvfile)))))

    if (tapSpeeds == None):
        tapSpeeds = np.zeros(5)

    newTapSpeeds = finger_tap_sped_processing(data, tapSpeeds) # matrix of tap speeds

    results = np.zeros(5)
    for i in range(5):
        if newTapSpeeds[i] > tapSpeeds[i]:
            results[i] = 1
            print("Tapping speed has improved for ", finger[i], " finger!")
    
    return results
    

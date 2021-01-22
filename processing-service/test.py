#import pytest
from tapSpeedProcessing import *
import unittest

def tapSpeed(file, tapSpeeds):
    finger = ["thumb", "index", "middle", "ring", "pinky"]

    # open fsr data
    # first column = time, column 2-6 = fingers starting from thumb
    with open(file, newline='') as csvfile:
        data = (((list(csv.reader(csvfile)))))

    if (tapSpeeds == None):
        tapSpeeds = np.zeros(5)

    newTapSpeeds = tapSpeedProcessing(data, tapSpeeds) # matrix of tap speeds

    results = np.zeros(5)
    # can probably remove this
    for i in range(5):
        if newTapSpeeds[i] > tapSpeeds[i]:
            results[i] = 1
            print("Tapping speed has improved for ", finger[i], " finger!")
    
    return results

def fingerTapSpeedTest1():
    file = "test/tap-speed/2021114_1_sec.csv"
    expected = [1,0,0,0,0]
    results = tapSpeed(file, None)
    print(results)
    if not np.array_equal( results, expected): 
        print( "test failed, mismatches" )
        print( "expected: ", expected )
        print( "results: ", results)
        return False
    print("test passed!")
    return True

def fingerTapSpeedTest2():
    file = "test/tap-speed/2021114_3_sec.csv"
    expected = [0,0,0,0,0]
    results = tapSpeed(file, [12,0,0,0,0])
    print(results)
    if not np.array_equal( results, expected): 
        print( "test failed, mismatches" )
        print( "expected: ", expected )
        print( "results: ", results)
        return False
    print("test passed!")
    return True

def fingerTapSpeedTest3():
    file = "test/tap-speed/2021114_0.5_sec.csv"
    expected = [1,0,0,0,0]
    results = tapSpeed(file, [4,0,0,0,0])
    print(results)
    if not np.array_equal( results, expected): 
        print( "test failed, mismatches" )
        print( "expected: ", expected )
        print( "results: ", results)
        return False
    print("test passed!")
    return True

def fingerTapSpeedTest4():
    file = "test/tap-speed/2021114_mix_sec.csv"
    expected = [0,0,0,0,0]
    results = tapSpeed(file, [46,0,0,0,0])
    print(results)
    if not np.array_equal( results, expected): 
        print( "test failed, mismatches" )
        print( "expected: ", expected )
        print( "results: ", results)
        return False
    print("test passed!")
    return True


if __name__ == "__main__":
    fingerTapSpeedTest1()
    fingerTapSpeedTest2()
    fingerTapSpeedTest3()
    fingerTapSpeedTest4()
import unittest
from implementation import *
from main import *


def finger_tap_sped_processing_test1():
    file = "2021114_1_sec.csv"
    expected = [1,0,0,0,0]
    results = main(file, None)
    print(results)
    if not np.array_equal( results, expected): 
        print( "test failed, mismatches" )
        print( "expected: ", expected )
        print( "results: ", results)
        return False
    print("test passed!")
    return True

def finger_tap_sped_processing_test2():
    file = "2021114_3_sec.csv"
    expected = [0,0,0,0,0]
    results = main(file, [12,0,0,0,0])
    print(results)
    if not np.array_equal( results, expected): 
        print( "test failed, mismatches" )
        print( "expected: ", expected )
        print( "results: ", results)
        return False
    print("test passed!")
    return True

def finger_tap_sped_processing_test3():
    file = "2021114_0.5_sec.csv"
    expected = [1,0,0,0,0]
    results = main(file, [4,0,0,0,0])
    print(results)
    if not np.array_equal( results, expected): 
        print( "test failed, mismatches" )
        print( "expected: ", expected )
        print( "results: ", results)
        return False
    print("test passed!")
    return True

def finger_tap_sped_processing_test4():
    file = "2021114_mix_sec.csv"
    expected = [0,0,0,0,0]
    results = main(file, [46,0,0,0,0])
    print(results)
    if not np.array_equal( results, expected): 
        print( "test failed, mismatches" )
        print( "expected: ", expected )
        print( "results: ", results)
        return False
    print("test passed!")
    return True

if __name__ == "__main__":
    finger_tap_sped_processing_test1()
    finger_tap_sped_processing_test2()
    finger_tap_sped_processing_test3()
    finger_tap_sped_processing_test4()

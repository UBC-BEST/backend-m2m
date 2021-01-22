import csv
import numpy as np
import matplotlib.pyplot as plt
import scipy as pylab
from scipy.signal import find_peaks, peak_prominences, argrelextrema

def tapSpeedProcessing(data, tapSpeeds):
    newTapSpeeds = np.zeros(5)
    minResist = 1000 #resistance in ohms
    set_prominence = 4000000 # prominence of peaks to filter noise from FFT

    data.pop(0)
    data = np.matrix.transpose(np.asmatrix(data))
    data = data.astype(np.float)

    for i in range(1,4):
        next_finger = data[i].astype(np.float)
        transform = np.fft.fft(next_finger)
        length = len(transform[0])
    
        #freq = np.fft.fftfreq(len(transform[0]), data[0,1]-data[0,0]) # change this to frequency of sampling
        fourier = np.abs(transform[0])[0:round(length/2)]
        
        peaks, _ = find_peaks(fourier, prominence= set_prominence)
        pp = peak_prominences(fourier, peaks)[0] # left here for transfer from flex sensor to fsr
     
        if len(peaks) != 0:
            max = np.amax(peaks)
            print(max)
        else:
            max = 0

        if max > tapSpeeds[i-1]:
            newTapSpeeds[i-1] = max

    return newTapSpeeds

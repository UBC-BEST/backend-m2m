# Tap Speed Processing Algorithm  
**Function Name:** *tapSpeedProcessing*  
**Parameters:**  
- *data* is a string to store the .csv filename  
- *tapSpeeds* is an array of length 5 with previous tap frequency for each finger  

**Outpus:**  
- *newTapSpeeds* is an array similar to *tapSpeeds* that stores current tap frequencies for each finger

The csv file should have the following format:  
|Time|Thumb|Index|Middle|Ring|Pinky|
|---|---|---|---|---|---|
|0|300|401|592|99|0|
|100|204|482|684|45|34|
|...|...|...|...|...|...|  

*Note: data comes from an FSR sensor*  

This function goes through each finger individually and performs a fast [fourier transform][1] (FFT) on the data to isolate the frequency components. It then finds peaks within the tranform with a specific [prominence value][2] (set to 4000000 but should be changed for FSR sensor). The peaks locate spikes within the transformed data and these are used to identify the tap speeds which are most occuring in a game session. If the maximum tap frequency within the peaks is larger than the prvious tap frequency then that finger's tap speed is replaced in the output array.

[1]: https://www.youtube.com/watch?v=spUNpyF58BY&ab_channel=3Blue1Brown
[2]: https://docs.scipy.org/doc/scipy/reference/generated/scipy.signal.find_peaks.html
